# Intrinsically Motivated Goal Exploration Processes with Automatic Curriculum Learning
by Sébastien Forestier, Yoan Mollard and Pierre-Yves Oudeyer

The paper is available on arXiv: https://arxiv.org/abs/1708.02190

A video explains the algorithms and shows the exploration and learning on the robotic setup: https://youtu.be/NOLAwD4ZTW0

Abstract:

Intrinsically motivated spontaneous exploration is a key enabler of autonomous lifelong learning in human children. It allows them to discover and acquire large repertoires of skills through self-generation, self-selection, self-ordering and self-experimentation of learning goals. We present the unsupervised multi-goal reinforcement learning formal framework as well as an algorithmic approach called intrinsically motivated goal exploration processes (IMGEP) to enable similar properties of autonomous learning in machines. The IMGEP algorithmic architecture relies on several principles: 1) self-generation of goals as parameterized reinforcement learning problems; 2) selection of goals based on intrinsic rewards; 3) exploration with parameterized time-bounded policies and fast incremental goal-parameterized policy search; 4) systematic reuse of information acquired when targeting a goal for improving other goals. We present a particularly efficient form of IMGEP that uses a modular representation of goal spaces as well as intrinsic rewards based on learning progress. We show how IMGEPs automatically generate a learning curriculum within an experimental setup where a real humanoid robot can explore multiple spaces of goals with several hundred continuous dimensions. While no particular target goal is provided to the system beforehand, this curriculum allows the discovery of skills of increasing complexity, that act as stepping stone for learning more complex skills (like nested tool use). We show that learning several spaces of diverse problems can be more efficient for learning complex skills than only trying to directly learn these complex skills. We illustrate the computational efficiency of IMGEPs as these robotic experiments use a simple memory-based low-level policy representations and search algorithm, enabling the whole system to learn online and incrementally on a Raspberry Pi 3. 

## Open-source and open-hardware
This repository gives the open-source code of the experiments described in the paper, together with 3D shapes of the parts that need to be 3D-printed. The code is based on [ROS](http://www.ros.org/) for the communication between robots / webcam etc.

The robots are from the [Poppy Project](https://www.poppy-project.org): an open-source 3D printed low-cost humanoid robotic platform that allows non-roboticists to quickly set up and program robotic experiments.
