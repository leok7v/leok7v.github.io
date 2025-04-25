In 2024 – 2025 ChatGPT hobby project.

<a href="https://github.com/leok7v/gyptix" target="_blank">GyPTix</a> open-source Generative Pre-trained Transformer project.

 - [x] Running **small-language-model** inference on lightweight GPU/CPU edge devices.  
 - [x] Leveraging **ggml** and **llama.cpp** for fully on-device AI inference on mobile hardware.  
 - [x] Developing the free, open-source <a href="http://gyptix.github.io" target="_blank">GyPTix</a> iOS/macOS app from scratch.  
 - [x] Building a minimal SwiftUI ↔ WebKit bridge for lean mobile-app development.  
 - [x] Re-architecting `llama.cpp` to meet mobile constraints.  
 - [x] Experimenting with quantized LLMs (DeepSeek, Gemma, Granite, Llama, etc.) for on-device deployment.  

In 2022 – 2024, second tour of duty at <a href="http://www.zspace.com" target="_blank">zSpace</a> Inc.—initially as consultant, later full-time lead architect (hands-on).

 - [x] Re-designed system architecture and codebase for lenticular-lens, eye-tracking displays used by zSpace and Acer.  
 - [x] Implemented, debugged, and shipped production code for glasses-free immersive 3D on Inspire and Imagine devices.  
 - [x] Worked with Acer **SpatialLabs** camera stack to enable seamless optical + IMU stylus tracking.  
 - [x] Productized APIs for lenticular displays and eye-tracking to streamline third-party integration.  
 - [x] Pioneered YOLO-based training and inference pipelines.  
 - [x] Explored AI-driven feature extraction for stylus and eye-pose detection.  

In 2021 I joined Facebook Reality Labs / Oculus, working on the XROS platform.

Details of engagement:  
 - [x] Performed a deep dive into XROS (Fuchsia-based) IPC source code.  
 - [x] Built the entire XROS stack from source and conducted performance experiments.  
 - [x] Rebuilt Horizon OS (Android VROS) from source, diagnosing battery-drain and performance issues.  
 - [x] Devised innovative idle-detection algorithms that delivered significant power savings.  
 - [x] Led A/B experiments for idle-detection strategies, collaborating with data-science teams on analysis.  

Since 2014 to 2020 I have been working for <a href="http://www.zspace.com" target="_blank">zSpace</a> Inc.
as a principle software engineer and technical lead/architect of system software team.

My duties included reviews of product development plans, subdivision of plans into achivable goals, translating goals into subprojects, architecting interfaces and implementation details of subprojects and writing correct and robust code.

I've interviewed, hired, trained and mentoring of new enginners in the arts of software development.

I have led the team in developing state-of-the-art system software and assited junior members of the team in all phases fo s/w development: jump in and do code reviews and help to debug, test and correct code when necessary. Also interfaced and collaborated extensivly with hardware team.

I have participated in a lot of code and design reviews, assuring proper coverage of topics, imparting lessons learned and good design practices.

I have exetensively collaborated with product development team to ensure our team meets overall development goals in accordance with the product development plan or market requirements and ensure project milestones are met. Was involved in monitoring progress of code development in meeting product requirements and schedule compliance.

The team was responsible for multiple IR cameras head tracking, stylus and screen angle IMU data-stream processing and integration, poses triangulation, and delivery of 3D data to end-user applications via C API.

User facing applications are usually written using Unity 3D, OpenGL/DDX and other GL frameworks.

System software also supports h/w manufacturing process, cameras calibration, overall components testing. 

Major achivements:
 - [x] instrumental role in rearchitecting and reimplemting of complete IMU, IR Cameras triangulation pipeline for two systems that are build by the company and shipped to customers. Generated hundreds of millions of dollars revenue for the company. 
 - [x] invented and implemented new FPGA friendly algorithms for tracking controller hardware. 
 - [x] lead embedded Android AOSP initative that resulted in succefull 3D VR laptop design, verification, development and production. 

During my course of duty I have:
 - [x] re-implemented ~~250,000~~ lines of C++ code (Windows only, R&D quality, ridden with STL/ATL/MFC)
 - [x] implemented same functionality in ~30KLoC of pure C99 portable code
 - [x] reworked ~~30,000~~+ lines of OpenCV based C++ triangulation algorithm to **~3,000** LoCs 
 - [x] improved binary code footprint from 500MB to approximately 5MB
 - [x] improved performance from 97% of system CPU utilization to less then 5%
 - [x] reduced build time from 50 minutes to 2 minutes
 - [x] actively maintained several github source code repositories
 - [x] responsible for over 60 posix and Win32 projects
 - [x] performed several thousands commits per year and many hundreds code reviews
 - [x] developed new algorithms for high performance camera blobs detection 
 - [x] assisted porting those algorithms to FPGA
 - [x] developed real time Android Java and Android Native C h/w debug applications 
 - [x] developed real time (less then 5 microseconds) logging
 - [x] implemented native code for AWS S3 analytics data uploads/downloads 
 - [x] resolved problems with oversea hardware manufactures
 - [x] implemented posix complaint hardware tests on both Linux (Embedded Android) and Windows
 - [x] implemented some end user facing UI applications
 - [x] resolved problems with Microsoft and Google related to Windows and Android codebases
 - [x] contributed code to open source projects
 - [x] mentored junior developers
 - [x] actively collaborated and provided fixes for issues in other team high level projects
 - [x] contributed code to some open source projects
 - [x] rebuild Android ASOP codebase to a headless version for OEM AmLogic SoC from scratch resulting in reduction of size from 1GB to 100MB and boot time from 30 seconds to 6 seconds
 - [x] implemented FPGA friendly IR greyscale images compression algorithm for hand gesture recognition AI / neural network research  <a href="https://github.com/leok7v/bdgr/blob/master/bdgr.c" target="_blank">FPGA friendly Golomb Rice compression</a>

hardware used:

 *  TI Beagle Boards, Samsung XU4, Ordoid C1,C2, Amlogic 905X, Blackfin...
 *  OmniVision and Aptina camera sensors development boards

tools used:
 * bash, vi, make, gcc, clang, ld, printf
 * msvc (2008, 2012, 2017, 2019)
 * Android Studio
 * InteliJ Idea and ReSharper
 * common sense
 * Google sheets and Excel for statistical analysis and diagramming.
 
gihub contributions (commits): 

![2019-punch-card](2019-punch-card.png)
![2018-punch-card](2018-punch-card.png)
![2017-punch-card](2017-punch-card.png)

<section class="accordion">
  <input type="checkbox" name="collapse" id="handle1">
  <p class="handle">
    <label for="handle1">zSpace demo video</label>
  <p>
  <div class="content">
    <div style="align: center; padding-left: 18pt;">
        <iframe width="280" height="153"  src="https://www.youtube.com/embed/-jsNH-H60io?rel=0&amp;autoplay=0&mute=1" 
         frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>
  </div>
</section>

