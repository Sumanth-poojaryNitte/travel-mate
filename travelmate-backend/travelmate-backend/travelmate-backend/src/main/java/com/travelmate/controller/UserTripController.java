package com.travelmate.controller;

import com.travelmate.model.UserTrip;
import com.travelmate.repository.UserTripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin(origins = "*")
public class UserTripController {

    @Autowired
    private UserTripRepository userTripRepository;

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
            .findByFromLocationContainingIgnoreCaseAndToLocationContainingIgnoreCase(
                    from,
                    to
            );
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
        @RequestParam MultipartFile image
) throws Exception {

    String fileName = System.currentTimeMillis()
            + "_" + image.getOriginalFilename();

    Path uploadPath = Paths.get("uploads");

    if (!Files.exists(uploadPath)) {
        Files.createDirectories(uploadPath);
    }

    Files.copy(
            image.getInputStream(),
            uploadPath.resolve(fileName)
    );

    UserTrip trip = new UserTrip();

    trip.setName(name);
    trip.setMobile(mobile);
    trip.setMail(mail);
    trip.setFromLocation(fromLocation);
    trip.setToLocation(toLocation);
    trip.setDate(date);

    trip.setImage(fileName);

    return userTripRepository.save(trip);
}
}