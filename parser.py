import xml.etree.ElementTree as ET

tree=ET.parse('./OTA_AirSeatMapRS.xml')

print(tree.find('{http://schemas.xmlsoap.org/soap/envelope/}SeatMapResponses'))









# # FlightsegmentInfo
# for child in root[0][0][1][0]:
#   print(child.tag, child.attrib)
# # Depart
# for child in root[0][0][1][0][0]:
#   print(child.tag, child.attrib)

# # Cabin Class
# for child in root[0][0][1][0][1]:
#   print('Cabin Class: ',child.tag, child.attrib)

# # Row info
# for child in root[0][0][1][0][1][0]:
#   print('Row info: ',child.tag, child.attrib)

# # Seat info
# for child in root[0][0][1][0][1][0][0]:
#   print('Seat info: ', child.tag, child.attrib)

# # Summary
# for child in root[0][0][1][0][1][0][0][0]:
#   print('Summary: ', child.tag, child.attrib)
  
# # Features
# for child in root[0][0][1][0][1][0][0][1]:
#   print('Features: ', child.text)