package com.travelmate.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.travelmate.model.UserTrip;
import com.travelmate.repository.UserTripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin(origins = "*")
public class UserTripController {

    @Autowired
    private UserTripRepository userTripRepository;

    @Autowired
    private Cloudinary cloudinary;

    @GetMapping("/test")
    public String test() {
        return "TravelMate working";
    }

    @PostMapping("/add")
    public UserTrip addTrip(@RequestBody UserTrip trip) {
        return userTripRepository.save(trip);
    }

    @GetMapping("/all")
    public List<UserTrip> getAllTrips() {
        return userTripRepository.findAll();
    }

    @GetMapping("/search")
    public List<UserTrip> searchTrips(
            @RequestParam String from,
            @RequestParam String to) {

        return userTripRepository
                .findByFromLocationContainingIgnoreCaseAndToLocationContainingIgnoreCase(from, to);
    }

    @GetMapping("/{id}")
    public UserTrip getTripById(@PathVariable Long id) {
        return userTripRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public String deleteTrip(@PathVariable Long id) {
        userTripRepository.deleteById(id);
        return "Trip deleted successfully!";
    }

    @PostMapping("/upload")
    public UserTrip uploadTrip(
            @RequestParam String name,
            @RequestParam String mobile,
            @RequestParam String mail,
            @RequestParam String fromLocation,
            @RequestParam String toLocation,
            @RequestParam String date,
            @RequestParam(required = false) MultipartFile image
    ) {

        try {
            UserTrip trip = new UserTrip();

            trip.setName(name);
            trip.setMobile(mobile);
            trip.setMail(mail);
            trip.setFromLocation(fromLocation);
            trip.setToLocation(toLocation);
            trip.setDate(date);

            if (image != null && !image.isEmpty()) {

                Map uploadResult = cloudinary.uploader().upload(
                        image.getBytes(),
                        ObjectUtils.emptyMap()
                );

                System.out.println("Cloudinary response: " + uploadResult);

                Object url = uploadResult.get("secure_url");
                if (url != null) {
                    trip.setImage(url.toString());
                }
            }

            return userTripRepository.save(trip);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Trip upload failed: " + e.getMessage());
        }
    }
}