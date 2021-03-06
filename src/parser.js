

let convert = require('xml-js');
let xml =
  `<?xml version="1.0" encoding="UTF-8"?>
  <soapenv:Envelope
    xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soapenv:Body>
      <ns:OTA_AirSeatMapRS Version="1"
        xmlns:ns="http://www.opentravel.org/OTA/2003/05/common/">
        <ns:Success/>
        <ns:SeatMapResponses>
          <ns:SeatMapResponse>
            <ns:FlightSegmentInfo DepartureDateTime="2020-11-22T15:30:00" FlightNumber="1179">
              <ns:DepartureAirport LocationCode="LAS"/>
              <ns:ArrivalAirport LocationCode="IAH"/>
              <ns:Equipment AirEquipType="739"/>
            </ns:FlightSegmentInfo>
            <ns:SeatMapDetails>
              <ns:CabinClass Layout="AB EF" UpperDeckInd="false">
                <ns:RowInfo CabinType="First" OperableInd="true" RowNumber="1">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="1A"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="1B"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="4" ExitRowInd="false" GalleyInd="false" GridNumber="4" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="1E"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="1F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="First" OperableInd="true" RowNumber="2">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="2A"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="2B"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="4" ExitRowInd="false" GalleyInd="false" GridNumber="4" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="2E"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="2F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
              </ns:CabinClass>
              <ns:CabinClass Layout="ABC DEF" UpperDeckInd="false">
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="7">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="7A"/>
                    <ns:Features extension="Lavatory">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="7B"/>
                    <ns:Features extension="Lavatory">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="7C"/>
                    <ns:Features extension="Lavatory">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="true" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="7D"/>
                    <ns:Features>BlockedSeat_Permanent</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="true" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="7E"/>
                    <ns:Features>BlockedSeat_Permanent</ns:Features>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="true" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="7F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="8">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="true" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="8A"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="true" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="8B"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="true" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="8C"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="8D"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="8E"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="8F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="9">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="9A"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="9B"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="9C"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="9D"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="9E"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="9F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="10">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="10A"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="10B"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="10C"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="10D"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="10E"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="10F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="11">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="11A"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="11B"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="11C"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="11D"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="11E"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="11F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="12">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="12A"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="12B"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="12C"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="12D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="12E"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="12F"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="14">
                  <ns:Characteristics>OverwingRow</ns:Characteristics>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="14A"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="14B"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2600" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="14C"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="14D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="14E"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2600" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="14F"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="15">
                  <ns:Characteristics>OverwingRow</ns:Characteristics>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="15A"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="15B"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2600" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="15C"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="15D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="15E"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2600" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="15F"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="20">
                  <ns:Characteristics>ExitRow</ns:Characteristics>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="true" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="20A"/>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="true" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="20B"/>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="true" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="20C"/>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="true" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="20D"/>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="true" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="20E"/>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="true" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="20F"/>
                    <ns:Features extension="Limited Recline">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="21">
                  <ns:Characteristics>ExitRow</ns:Characteristics>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="true" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="21A"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="true" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="21B"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="true" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="21C"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="true" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="21D"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="true" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="21E"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="true" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="21F"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="22">
                  <ns:Characteristics>OverwingRow</ns:Characteristics>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="22A"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="22B"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="22C"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="22D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="22E"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="22F"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="23">
                  <ns:Characteristics>OverwingRow</ns:Characteristics>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="23A"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="23B"/>
                    <ns:Features>BlockedSeat_Permanent</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="23C"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>BlockedSeat_Permanent</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="23D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="23E"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="23F"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="24">
                  <ns:Characteristics>OverwingRow</ns:Characteristics>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="24A"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="24B"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="24C"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="24D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="24E"/>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="24F"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Overwing</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="25">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="25A"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="25B"/>
                    <ns:Features>BlockedSeat_Permanent</ns:Features>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="25C"/>
                    <ns:Features>BlockedSeat_Permanent</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="25D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="25E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="25F"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="26">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="26A"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="26B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="26C"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="26D"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="4200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="26E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="26F"/>
                    <ns:Features extension="Preferred">Other_</ns:Features>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Preferred">
                      <ns:Fee Amount="2700" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="27">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="27A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="27B"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="27C"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="27D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="27E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="27F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="28">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="28A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="28B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="28C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="28D"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="28E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="28F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="29">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="29A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="29B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="29C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="29D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="29E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="29F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="30">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="30A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="30B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="30C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="30D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="30E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="30F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="31">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="31A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="31B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="31C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="31D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="31E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="31F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="32">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="32A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="32B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="32C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="32D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="32E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="32F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="34">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="34A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="34B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="34C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="34D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="34E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="34F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="35">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="35A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="35B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="35C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="35D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="35E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="35F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="36">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="36A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="36B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="36C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="36D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="36E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="36F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="37">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="37A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="37B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="37C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="37D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="37E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="37F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="38">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="38A"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="38B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="38C"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="38D"/>
                    <ns:Features>Aisle</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1800" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="38E"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="38F"/>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1300" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                </ns:RowInfo>
                <ns:RowInfo CabinType="Economy" OperableInd="true" RowNumber="39">
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="1" ExitRowInd="false" GalleyInd="false" GridNumber="1" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="true" SeatNumber="39A"/>
                    <ns:Status>Held</ns:Status>
                    <ns:Features>Window</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="2" ExitRowInd="false" GalleyInd="false" GridNumber="2" PlaneSection="Center">
                    <ns:Summary AvailableInd="true" InoperativeInd="false" OccupiedInd="false" SeatNumber="39B"/>
                    <ns:Features>Center</ns:Features>
                    <ns:Features extension="Chargeable">Other_</ns:Features>
                    <ns:Service CodeContext="Economy">
                      <ns:Fee Amount="1200" CurrencyCode="USD" DecimalPlaces="2">
                        <ns:Taxes Amount="0" CurrencyCode="USD"/>
                      </ns:Fee>
                    </ns:Service>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="3" ExitRowInd="false" GalleyInd="false" GridNumber="3" PlaneSection="Left">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="39C"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="5" ExitRowInd="false" GalleyInd="false" GridNumber="5" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="39D"/>
                    <ns:Features>Aisle</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="6" ExitRowInd="false" GalleyInd="false" GridNumber="6" PlaneSection="Center">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="39E"/>
                    <ns:Features>Center</ns:Features>
                  </ns:SeatInfo>
                  <ns:SeatInfo BlockedInd="false" BulkheadInd="false" ColumnNumber="7" ExitRowInd="false" GalleyInd="false" GridNumber="7" PlaneSection="Right">
                    <ns:Summary AvailableInd="false" InoperativeInd="false" OccupiedInd="false" SeatNumber="39F"/>
                    <ns:Features>Window</ns:Features>
                  </ns:SeatInfo>
                </ns:RowInfo>
              </ns:CabinClass>
            </ns:SeatMapDetails>
          </ns:SeatMapResponse>
        </ns:SeatMapResponses>
        <ns:Warnings>
          <ns:Warning Type="11" Code="59">ENSURE PASSENGER MEETS GOVERNMENT DESIGNATED EXIT ROW CRITERIA</ns:Warning>
          <ns:Warning Type="11" Code="450">Valid Credit Card Payment Types: ,VI,UP,MPVI,MC,AX,DS,DC,TP,JC</ns:Warning>
        </ns:Warnings>
      </ns:OTA_AirSeatMapRS>
    </soapenv:Body>
  </soapenv:Envelope>`
  ;
let result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
let result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
console.log(result2);