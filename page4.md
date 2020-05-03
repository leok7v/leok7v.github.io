Dolby Systems 
---

In 2011-2012 I provided independent software consulting services to Dolby Advanced Research group.
The goal of the project was early bring-up 
of <a href="https://en.wikipedia.org/wiki/JPEG_XT" target="_blank">Dolby JPEG XT</a> HDR 
technology to the mobile Android platform.

I personally accredited and implemented a significant part of the JPEG HDR pipeline.
As a member of the development team, I collaborated with several mobile platforms manufacturers 
to deploy the pipeline on a variety of development boards and end-user Android devices.

My code contributions were in the areas of:
  * rapid camera image capture (Java to Android NDK C JNI)
  * interfacing with encoding pipeline
  * mathematical processing of resulting HDR (10/12 bits per color) image into separate bands
  * custom build JPEG HDR encoder with double packing reduced color image into main JPEG stream and ratio component in JPEG APP tagged storage.
I also implemented HDR viewer code in a mixture of Java and NDK C JNI code:
  * reading JPEG HDR images into JNI Android memory (size of the captured image exceeded JVM maximum amount of accessible memory)
  * asynchronous pipeline for reading image tiles and post processing it according to application view parameters
  * delivering processed tiles into JVM memory and presenting it to the user on mobile GPU
  * packaging above components into Android HDR image viewer application.
Dolby HDR image viewer allowed user to pan/zoom into up 
to 70 mega pixels HDR images on the devices supporting 64MB JVM memory partitions
and automatically or manually adjusting exposure parameters according to the 
average luminosity of area of interest. The behavior of application was similar to
Adobe LightRoom RAW images post processing pipeline but in real time on mobile device.
  
The JPEG HDR technology and patents were open sourced by Dolby years after the work was complete.

To my knowledge there is still no HDR viewer application for mobile 
platform today with the capabilities of Dolby HDR viewer.

MePlease Ltd, UK
---

2009-2011 I was working for MePlease, a startup based in the UK. The goal was to develop a loyalty platform, maximizing customer engagement.
Notable customers included Pepsi "Apps to Cups" initiative and early Starbucks Cards point system.

My personal contributions:
 * Architected and implemented custom server side MePlease url to J2EE servlet endpoints dispatch mechanism using Java reflection to support desktop, smart-phones and feature phones MVC code. 
 * Automated and significantly simplified universal parameters passing from http requests to servlet controller/view context.
 * Implemented lightweight WURFL DB based server side phone capabilities detection.
 * Implemented original code for “feature”-phones (no Javascript) model/view/controller.
 * Implemented JavaScript/AJAX async desktop code.
 * Contributed to major parts of infrastructure and deployment process; implemented intelligent crash handling logic with automatic QA team notifications.
 * Involved in integration with Facebook Like services.