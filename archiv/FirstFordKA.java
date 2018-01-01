import challenge.Controller;
import challenge.Direction;
import challenge.Position;
import challenge.Vehicle;

public class FirstFordKA implements Vehicle {

        private Controller myController;
        private Position startPosition;
        private Position destination;

        public FirstFordKA() {
                System.out.println("FirstStrasserVehicle is running");
        }

        public void init(Controller c) {
                // TODO Auto-generated method stub
                        myController = c;
                        startPosition = myController.getPosition();
                        destination = myController.getPoles()[0];
                        System.out.println("You are on" + myController.getPosition());
        }

        public Direction getCommand(double time) {
                Position currentPosition = myController.getPosition();

                if (currentPosition.getX() == destination.getX() &&
                        currentPosition.getY() == destination.getY()) {
                                destination = startPosition;
                                return getCommand(time);
                }

                else {
                        if (destination.getX() > currentPosition.getX() &&
                                destination.getY() == currentPosition.getY()) {
                                return Direction.E;
                        }
                        if (destination.getX() < currentPosition.getX() &&
                              destination.getY() == currentPosition.getY()) {
                                return Direction.W;
                        }
                        if (destination.getX() > currentPosition.getX() &&
                                destination.getY() > currentPosition.getY()) {
                                return Direction.NE;
                        }
                        if (destination.getX() < currentPosition.getX() &&
                                destination.getY() < currentPosition.getX()) {
                                return Direction.SW;
                        }
                        if (destination.getX() < currentPosition.getX() &&
                                destination.getY() > currentPosition.getX()) {
                                return Direction.NW;
                        }
                        else
                                return Direction.SE;

                }

        }

}

