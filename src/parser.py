# import xml.etree.ElementTree as ET

# tree=ET.parse('./OTA_AirSeatMapRS.xml')



# # define namespace mappings to use as shorthand below
# namespaces = {
#     'soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
#     'ns': 'http://www.opentravel.org/OTA/2003/05/common/',
# }


# # reference the namespace mappings here by `<name>:`
# names = tree.findall(
#     './soapenv:Body'
#     '/ns:OTA_AirSeatMapRS'
#     '/ns:SeatMapResponses'
#     '/ns:Name',
#     namespaces,
# )

# for name in names:
#     print(name)

from xml.etree import ElementTree as ET

xml    = ET.parse('./OTA_AirSeatMapRS.xml')
parsed = parseXmlToJson(xml)


def parseXmlToJson(xml):
  response = {}

  for child in list(xml):
    if len(list(child)) > 0:
      response[child.tag] = parseXmlToJson(child)
    else:
      response[child.tag] = child.text or ''

    # one-liner equivalent
    # response[child.tag] = parseXmlToJson(child) if len(list(child)) > 0 else child.text or ''

  return response




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