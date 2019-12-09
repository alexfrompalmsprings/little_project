CREATE DATABASE IF NOT EXISTS workoutList;

USE workoutList;

create TABLE IF NOT EXISTS workouts (
  workoutId INT AUTO_INCREMENT NOT NULL,
  workoutName VARCHAR(40) NOT NULL,
  workoutDescription VARCHAR(320) NOT NULL,
  PRIMARY KEY (workoutId),
  UNIQUE (workoutName)
);

