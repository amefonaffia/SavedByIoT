# RescueDeck
For Junction 2018. Link to presentation https://prezi.com/view/dR39RfcGpvKL2RXCDDyz/.

# Description

The RescueDeck project aims to provide first-point disaster management during emergency situations. Such disasters range from common accidents to natural disasters, providing a quick status update on the situation to enable call for help to the appropriate authorities. 
The basic concept of the system is to have the main server application, responsible for coordinating all operations and supported by hardware devices and an android application to collect and visualize relevant information collated from disaster situations.

 From the information provided, rescue personnel is given an efficient way to coordinate and carry out their rescue operations. 

As there is a possibility of the loss of local communication infrastructure within the disaster area, the RescueDeck project provides a connectivity feature that enables connectivity to devices in disaster areas and can thus collect the necessary information to be sent to the Server for rescue operations. This initial connectivity to devices in the disaster region, in the absence of local infrastructure, is carried out by WiFi adhoc. Then the collected information is sent via the internet to the Main Server.

The system will contain: 
1. Main Server and database to store collated information and generate reports and indications.
2. Android application for citizens to send out custom SOS messages to the disaster management center. 
3. Unmanned carriers (i.e drones) to carry the network connectivity device and enable the collection of SOS messages and other information needed during a disaster, in the event of loss of local infrastructure communication.  

Tools used:
1. Raspberry Pi 3
2. Andriod Smartphone (as wearable)
3. Azure Cloud
