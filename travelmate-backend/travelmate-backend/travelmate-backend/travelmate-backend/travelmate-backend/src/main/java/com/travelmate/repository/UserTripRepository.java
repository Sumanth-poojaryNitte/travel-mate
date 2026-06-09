package com.travelmate.repository;

import com.travelmate.model.UserTrip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTripRepository extends JpaRepository<UserTrip, Long> {

    List<UserTrip> findByFromLocationContainingIgnoreCaseAndToLocationContainingIgnoreCase(
            String fromLocation,
            String toLocation
    );
}