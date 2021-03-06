# APEX_Playground package

This directory is a ROS package. Documentation is poor yet. If you're looking for a simulation, please checkout [this repository](https://github.com/sebastien-forestier/NIPS2017/tree/apex_sim) instead.

## Setting up hardware: Quickstart
The experimental setup assumes you have at least:
 - N Poppy Torso robots
   - version running Raspberry Pi 3, with USB2AX converter plugged into the robot's head 
   - A permanent USB stick or USB hard drive plugged into the robot's head
 - N Poppy Ergo junior robots, each with the following USB devices connected:
   - 2 Ultrastik joysticks numbered ID 1 and ID 2
   - 1 Webcam watching the scene
 - A central controller named `ros.local`
 - These define N instances connected on network switches

### Setting up the controller
On the controller clone [these repos](https://github.com/ymollard/APEX/blob/master/scripts/raspberrypi/apexify.bash#L101-L104) and compile your ROS workspace. If the controller is not named `ros.local`, update [this line](https://github.com/ymollard/APEX/blob/master/scripts/raspberrypi/apexify.bash#L63-L63).

### Setting up Poppy robots
Poppy robots are sold with a pre-flashed microSD card, please setup a fresh Raspbian, connect a USB stick (formatted as a swap partition) to provide temporary swap during compiling and compile APEX software using [this script](https://github.com/ymollard/APEX/blob/master/scripts/raspberrypi/apexify.bash). After flashing rename both cards to hostnames `apex-1-torso` and `apex-1-ergo`. The same software runs on both Poppys, only the hostname will differentiate their behaviour. Proceed all N instances by increasing the instance ID in the hostname.

## First startup
If you compiled and installed all software successfully, robots will loop until they find connect to the ROS master at startup. just start a `roscore` on `ros.local` and all robots should go in starting position.

`rosnode list` on the controller must tell which nodes are running on each instances. If a node is missing for one or several instances, it might be due to a missing expected USB device or software error (see Troubleshooting below). Here we provide an example output with 2 instances running, which means 2 Ergo Jr + 2 Torsos:
```
[http://ros.local:11311] $ rosnode list
/apex_1/controller
/apex_1/environment
/apex_1/ergo
/apex_1/joystick_publisher
/apex_1/learning
/apex_1/perception
/apex_1/poppy_ergo_jr/poppy_ergo_jr_controllers
/apex_1/poppy_torso/poppy_torso_controllers
/apex_1/sound
/apex_1/torso
/apex_1/user
/apex_2/controller
/apex_2/environment
/apex_2/ergo
/apex_2/joystick_publisher
/apex_2/learning
/apex_2/perception
/apex_2/poppy_ergo_jr/poppy_ergo_jr_controllers
/apex_2/poppy_torso/poppy_torso_controllers
/apex_2/sound
/apex_2/torso
/apex_2/user
/rosout
```

Run this command on the controller to start:
```
roslaunch apex_playground start_hw.launch name:=unique_experiment_name
```
Learning data are stored on the USB sticks or hard drives connected to each torso.

## Troubleshooting
Connect in SSH to the faulty raspberry pi. The command hereunder will guide you to catch the reason of failure: 
`sudo journalctl -u apex --n 50`

A working Torso robot must loop on `Controller fully started!` till it gets work. A working Ergo Jr robot must say it started robot servoing (and moving joysticks should work).
