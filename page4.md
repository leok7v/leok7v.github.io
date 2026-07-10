Dolby Systems 
---

In 2011-2012 I provided independent software consulting services to Dolby Advanced Research group.
The goal of the project was early bring-up 
of <a href="https://en.wikipedia.org/wiki/JPEG_XT" target="_blank">Dolby JPEG XT</a> HDR 
technology to the mobile Android platform.

I personally architected and implemented a significant part of the JPEG HDR pipeline.
As a member of the development team, I collaborated with several mobile-platform manufacturers 
to deploy the pipeline on a variety of development boards and end-user Android devices.

My code contributions were in the areas of:
  * rapid camera image capture (Java to Android NDK C JNI)
  * interfacing with encoding pipeline
  * mathematical processing of resulting HDR (10/12 bits per color) image into separate bands
  * custom-built JPEG HDR encoder, double-packing the reduced color image into the main JPEG stream and the ratio component into JPEG APP-tagged storage.
I also implemented HDR viewer code in a mixture of Java and NDK C JNI code:
  * reading JPEG HDR images into JNI Android memory (the size of the captured image exceeded the JVM's maximum amount of accessible memory)
  * asynchronous pipeline for reading image tiles and post-processing them according to application view parameters
  * delivering processed tiles into JVM memory and presenting them to the user on the mobile GPU
  * packaging the above components into an Android HDR image viewer application.
The Dolby HDR image viewer allowed the user to pan/zoom into up 
to 70-megapixel HDR images on devices supporting 64MB JVM memory partitions,
automatically or manually adjusting exposure parameters according to the 
average luminosity of the area of interest. The behavior of the application was similar to
Adobe Lightroom's RAW image post-processing pipeline, but in real time on a mobile device.
  
The JPEG HDR technology and patents were open sourced by Dolby years after the work was complete.

To my knowledge there is still no HDR viewer application for mobile 
platform today with the capabilities of Dolby HDR viewer.

MePlease Ltd, UK
---

2009-2011 I was working for MePlease, a startup based in the UK. The goal was to develop a loyalty platform, maximizing customer engagement.
Notable customers included Pepsi "Apps to Cups" initiative and early Starbucks Cards point system.

My personal contributions:
 * Architected and implemented a custom server-side MePlease URL-to-J2EE-servlet endpoint dispatch mechanism using Java reflection to support desktop, smart-phone, and feature-phone MVC code. 
 * Automated and significantly simplified universal parameter passing from HTTP requests to servlet controller/view context.
 * Implemented lightweight WURFL-DB-based server-side phone capability detection.
 * Implemented original code for “feature”-phones (no JavaScript) model/view/controller.
 * Implemented JavaScript/AJAX async desktop code.
 * Contributed to major parts of infrastructure and deployment process; implemented intelligent crash handling logic with automatic QA team notifications.
 * Involved in integration with Facebook Like services.