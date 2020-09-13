// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
    {
      "priceGroups": [
        {
          "id": 0,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 117.07240999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2310,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "247",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 18:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 21:45:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D19H45M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7001,
                  "eft": "23h 10m",
                  "stops": 1,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "18:50",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "18:50",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1850",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1850AZLHR.2.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "117",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "07"
        },
        {
          "id": 1,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 197.57551999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2115,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Munich",
                      "displayAirlineName": "Lufthansa",
                      "id": 1,
                      "flightNumber": "2475",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LH",
                      "operatingAirlineCode": "LH",
                      "departureDateTime": {
                        "date": "2020-10-10 13:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 16:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "MUC",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D2H10M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LH",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.irreg.lufthansaexperts.com/en/home.html"
                    },
                    {
                      "departureAirportName": "Munich",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "433",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 18:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 20:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "MUC",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D13H25M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "318",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 09:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 12:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7002,
                  "eft": "21h 15m",
                  "stops": 2,
                  "operatingAirlineCode": "LH",
                  "operatingAirlineName": "Lufthansa",
                  "displayAirlineCode": "LH",
                  "displayAirlineName": "Lufthansa",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "13:50",
                  "arrivalTime": "12:05",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.irreg.lufthansaexperts.com/en/home.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "13:50",
                  "arrivalTimeText": "12:05",
                  "departureTimeData": "1350",
                  "arrivalTimeData": "1205",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1350LHLHR.3.1205AZFCO",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "197",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "58"
        },
        {
          "id": 2,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 183.93040999999997,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2505,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "207",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 16:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 20:35:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D1H15M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "2130",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 21:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 23:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D18H30M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7003,
                  "eft": "25h 05m",
                  "stops": 2,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "16:55",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "16:55",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1655",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1655AZLHR.3.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "183",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "93"
        },
        {
          "id": 3,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 183.93040999999997,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2505,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "207",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 16:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 20:35:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D12H55M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "2028",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 09:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 10:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D6H50M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7004,
                  "eft": "25h 05m",
                  "stops": 2,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "16:55",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "16:55",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1655",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1655AZLHR.3.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "183",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "93"
        },
        {
          "id": 4,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 187.50629999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2505,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "207",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 16:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 20:35:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D16H55M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "2038",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 13:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 14:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D2H50M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7005,
                  "eft": "25h 05m",
                  "stops": 2,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "16:55",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "16:55",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1655",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1655AZLHR.3.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "187",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "51"
        },
        {
          "id": 5,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 210.72426,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2100,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "357",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 19:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 22:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D12H45M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "575",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 10:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 12:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D2H55M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "324",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 15:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 17:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7006,
                  "eft": "21h 00m",
                  "stops": 2,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "19:25",
                  "arrivalTime": "17:25",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "19:25",
                  "arrivalTimeText": "17:25",
                  "departureTimeData": "1925",
                  "arrivalTimeData": "1725",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1925LXLHR.3.1725AZFCO",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "210",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "72"
        },
        {
          "id": 6,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 183.93040999999997,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2945,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "203",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 12:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 15:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D21H35M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "2038",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 13:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 14:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D2H50M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7007,
                  "eft": "29h 45m",
                  "stops": 2,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "12:15",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "12:15",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1215",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1215AZLHR.3.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "183",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "93"
        },
        {
          "id": 7,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 183.93040999999997,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2945,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "203",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 12:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 15:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D3H5M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "2056",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 20:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D21H20M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7008,
                  "eft": "29h 45m",
                  "stops": 2,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "12:15",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "12:15",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1215",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1215AZLHR.3.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "183",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "93"
        },
        {
          "id": 8,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 183.93040999999997,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2945,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "203",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 12:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 15:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D5H55M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "2130",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 21:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 23:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D18H30M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7009,
                  "eft": "29h 45m",
                  "stops": 2,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "12:15",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "12:15",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1215",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1215AZLHR.3.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "183",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "93"
        },
        {
          "id": 9,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 183.93040999999997,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2945,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 1,
                      "flightNumber": "203",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 12:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 15:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D17H35M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Milan Linate",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "2028",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 09:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 10:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "LIN",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D6H50M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Milan Linate",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "358",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 17:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIN",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7010,
                  "eft": "29h 45m",
                  "stops": 2,
                  "operatingAirlineCode": "AZ",
                  "operatingAirlineName": "Alitalia",
                  "displayAirlineCode": "AZ",
                  "displayAirlineName": "Alitalia",
                  "displayAllianceName": "SkyTeam Alliance",
                  "departureTime": "12:15",
                  "arrivalTime": "19:00",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "12:15",
                  "arrivalTimeText": "19:00",
                  "departureTimeData": "1215",
                  "arrivalTimeData": "1900",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1215AZLHR.3.1900AZLIN",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "183",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "93"
        },
        {
          "id": 10,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 197.57551999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2635,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Munich",
                      "displayAirlineName": "Lufthansa",
                      "id": 1,
                      "flightNumber": "2471",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LH",
                      "operatingAirlineCode": "LH",
                      "departureDateTime": {
                        "date": "2020-10-10 08:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 11:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "MUC",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D7H30M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LH",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.irreg.lufthansaexperts.com/en/home.html"
                    },
                    {
                      "departureAirportName": "Munich",
                      "arrivalAirportName": "Rome Leonardo Da Vinci",
                      "displayAirlineName": "Alitalia",
                      "id": 2,
                      "flightNumber": "433",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-10 18:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 20:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "MUC",
                      "arrivalAirportCode": "FCO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D13H25M",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    },
                    {
                      "departureAirportName": "Rome Leonardo Da Vinci",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "Alitalia",
                      "id": 3,
                      "flightNumber": "318",
                      "aircraftCode": null,
                      "marketingAirlineCode": "AZ",
                      "operatingAirlineCode": "AZ",
                      "departureDateTime": {
                        "date": "2020-10-11 09:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 12:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "FCO",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "AZ",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.alitalia.com/en_en/fly-alitalia/news-and-activities/news/info-flights.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7011,
                  "eft": "26h 35m",
                  "stops": 2,
                  "operatingAirlineCode": "LH",
                  "operatingAirlineName": "Lufthansa",
                  "displayAirlineCode": "LH",
                  "displayAirlineName": "Lufthansa",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "08:30",
                  "arrivalTime": "12:05",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.irreg.lufthansaexperts.com/en/home.html",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "08:30",
                  "arrivalTimeText": "12:05",
                  "departureTimeData": "830",
                  "arrivalTimeData": "1205",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "830LHLHR.3.1205AZFCO",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "197",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "58"
        },
        {
          "id": 11,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 925,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "353",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 09:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 11:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D6H35M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4614",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 18:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 19:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7012,
                  "eft": "09h 25m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "09:05",
                  "arrivalTime": "19:30",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sat 10 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "09:05",
                  "arrivalTimeText": "19:30",
                  "departureTimeData": "905",
                  "arrivalTimeData": "1930",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "905LXLHR.2.1930LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 12,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 1215,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "357",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 19:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 22:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D9H15M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4600",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 07:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 08:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7013,
                  "eft": "12h 15m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "19:25",
                  "arrivalTime": "08:40",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "19:25",
                  "arrivalTimeText": "08:40",
                  "departureTimeData": "1925",
                  "arrivalTimeData": "840",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1925LXLHR.2.840LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 13,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 1515,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "357",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 19:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 22:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D12H20M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4604",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 10:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 11:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7014,
                  "eft": "15h 15m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "19:25",
                  "arrivalTime": "11:40",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "19:25",
                  "arrivalTimeText": "11:40",
                  "departureTimeData": "1925",
                  "arrivalTimeData": "1140",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1925LXLHR.2.1140LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 14,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 1650,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "357",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 19:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 22:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D13H55M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4606",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 12:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 13:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7015,
                  "eft": "16h 50m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "19:25",
                  "arrivalTime": "13:15",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "19:25",
                  "arrivalTimeText": "13:15",
                  "departureTimeData": "1925",
                  "arrivalTimeData": "1315",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1925LXLHR.2.1315LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 15,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 1715,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "355",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 14:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 17:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D14H15M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4600",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 07:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 08:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7016,
                  "eft": "17h 15m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "14:25",
                  "arrivalTime": "08:40",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "14:25",
                  "arrivalTimeText": "08:40",
                  "departureTimeData": "1425",
                  "arrivalTimeData": "840",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1425LXLHR.2.840LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 16,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 210.69386999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 1725,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "357",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 19:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 22:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D12H5M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Zurich",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "2807",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 10:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 11:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "ZRH",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D1H25M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Zurich",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 3,
                      "flightNumber": "638",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 12:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 13:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "ZRH",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7017,
                  "eft": "17h 25m",
                  "stops": 2,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "19:25",
                  "arrivalTime": "13:50",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "19:25",
                  "arrivalTimeText": "13:50",
                  "departureTimeData": "1925",
                  "arrivalTimeData": "1350",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1925LXLHR.3.1350LXZRH",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "210",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "69"
        },
        {
          "id": 17,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2015,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "355",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 14:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 17:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D17H20M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4604",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 10:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 11:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7018,
                  "eft": "20h 15m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "14:25",
                  "arrivalTime": "11:40",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "14:25",
                  "arrivalTimeText": "11:40",
                  "departureTimeData": "1425",
                  "arrivalTimeData": "1140",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1425LXLHR.2.1140LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 18,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2150,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "355",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 14:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 17:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D18H55M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4606",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 12:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 13:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7019,
                  "eft": "21h 50m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "14:25",
                  "arrivalTime": "13:15",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "14:25",
                  "arrivalTimeText": "13:15",
                  "departureTimeData": "1425",
                  "arrivalTimeData": "1315",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1425LXLHR.2.1315LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 19,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 233.57754,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 940,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Zurich",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "317",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 08:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 11:45:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "ZRH",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D1H30M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Zurich",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "2806",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 13:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 14:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "ZRH",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D4H10M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 3,
                      "flightNumber": "4614",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 18:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 19:30:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7020,
                  "eft": "09h 40m",
                  "stops": 2,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "08:50",
                  "arrivalTime": "19:30",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sat 10 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "08:50",
                  "arrivalTimeText": "19:30",
                  "departureTimeData": "850",
                  "arrivalTimeData": "1930",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "850LXLHR.3.1930LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "233",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "58"
        },
        {
          "id": 20,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 207.74604,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2235,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Geneva",
                      "displayAirlineName": "SWISS",
                      "id": 1,
                      "flightNumber": "353",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-10 09:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 11:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "GVA",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D19H40M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    },
                    {
                      "departureAirportName": "Geneva",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "SWISS",
                      "id": 2,
                      "flightNumber": "4600",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LX",
                      "operatingAirlineCode": "LX",
                      "departureDateTime": {
                        "date": "2020-10-11 07:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 08:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "GVA",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LX",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7021,
                  "eft": "22h 35m",
                  "stops": 1,
                  "operatingAirlineCode": "LX",
                  "operatingAirlineName": "SWISS",
                  "displayAirlineCode": "LX",
                  "displayAirlineName": "SWISS",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "09:05",
                  "arrivalTime": "08:40",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.swiss.com/ch/en/various/Breaking-News",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "09:05",
                  "arrivalTimeText": "08:40",
                  "departureTimeData": "905",
                  "arrivalTimeData": "840",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "905LXLHR.2.840LXGVA",
                  "mtp": 0
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "207",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "75"
        },
        {
          "id": 21,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 203.25844999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 2200,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Brussels (All Airports)",
                      "displayAirlineName": "Brussels Airlines",
                      "id": 1,
                      "flightNumber": "2094",
                      "aircraftCode": null,
                      "marketingAirlineCode": "SN",
                      "operatingAirlineCode": "SN",
                      "departureDateTime": {
                        "date": "2020-10-10 11:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 13:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "BRU",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D6H25M",
                      "technicalStops": 0,
                      "displayAirlineCode": "SN",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://www.brusselsairlines.com/en-uk/misc/AlertMessageDetail.aspx"
                    },
                    {
                      "departureAirportName": "Brussels (All Airports)",
                      "arrivalAirportName": "Warsaw Chopin",
                      "displayAirlineName": "LOT Polish Airlines",
                      "id": 2,
                      "flightNumber": "234",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LO",
                      "operatingAirlineCode": "LO",
                      "departureDateTime": {
                        "date": "2020-10-10 19:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 21:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "BRU",
                      "arrivalAirportCode": "WAW",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D9H55M",
                      "technicalStops": 0,
                      "displayAirlineCode": "LO",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.lot.com/gb/en/flexible-rebooking-options"
                    },
                    {
                      "departureAirportName": "Warsaw Chopin",
                      "arrivalAirportName": "Paris Charles De Gaulle",
                      "displayAirlineName": "LOT Polish Airlines",
                      "id": 3,
                      "flightNumber": "331",
                      "aircraftCode": null,
                      "marketingAirlineCode": "LO",
                      "operatingAirlineCode": "LO",
                      "departureDateTime": {
                        "date": "2020-10-11 07:35:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 10:05:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "WAW",
                      "arrivalAirportCode": "CDG",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "LO",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.lot.com/gb/en/flexible-rebooking-options"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7022,
                  "eft": "22h 00m",
                  "stops": 2,
                  "operatingAirlineCode": "SN",
                  "operatingAirlineName": "Brussels Airlines",
                  "displayAirlineCode": "SN",
                  "displayAirlineName": "Brussels Airlines",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "11:05",
                  "arrivalTime": "10:05",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "CDG",
                  "arrivalAirportName": "Paris Charles De Gaulle",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Sun 11 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://www.brusselsairlines.com/en-uk/misc/AlertMessageDetail.aspx",
                  "travelDays": 0,
                  "marketingCompany": null,
                  "departureTimeText": "11:05",
                  "arrivalTimeText": "10:05",
                  "departureTimeData": "1105",
                  "arrivalTimeData": "1005",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1105SNLHR.3.1005LOWAW",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "203",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "26"
        },
        {
          "id": 22,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 132.84481999999997,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 3725,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Lisbon Portela",
                      "displayAirlineName": "TAP Air Portugal",
                      "id": 1,
                      "flightNumber": "1357",
                      "aircraftCode": null,
                      "marketingAirlineCode": "TP",
                      "operatingAirlineCode": "TP",
                      "departureDateTime": {
                        "date": "2020-10-10 18:45:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-10 21:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "LIS",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D15H50M",
                      "technicalStops": 0,
                      "displayAirlineCode": "TP",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.flytap.com/en-pt/latest-updates"
                    },
                    {
                      "departureAirportName": "Lisbon Portela",
                      "arrivalAirportName": "Bilbao",
                      "displayAirlineName": "TAP Air Portugal",
                      "id": 2,
                      "flightNumber": "1062",
                      "aircraftCode": null,
                      "marketingAirlineCode": "TP",
                      "operatingAirlineCode": "TP",
                      "departureDateTime": {
                        "date": "2020-10-11 13:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 16:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "LIS",
                      "arrivalAirportCode": "BIO",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D5H0M",
                      "technicalStops": 0,
                      "displayAirlineCode": "TP",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.flytap.com/en-pt/latest-updates"
                    },
                    {
                      "departureAirportName": "Bilbao",
                      "arrivalAirportName": "Madrid Barajas",
                      "displayAirlineName": "Air Europa",
                      "id": 3,
                      "flightNumber": "7160",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-11 21:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 22:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "BIO",
                      "arrivalAirportCode": "MAD",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D8H45M",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    },
                    {
                      "departureAirportName": "Madrid Barajas",
                      "arrivalAirportName": "Paris Orly",
                      "displayAirlineName": "Air Europa",
                      "id": 4,
                      "flightNumber": "1027",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-12 07:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-12 09:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "MAD",
                      "arrivalAirportCode": "ORY",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7023,
                  "eft": "37h 25m",
                  "stops": 3,
                  "operatingAirlineCode": "TP",
                  "operatingAirlineName": "TAP Air Portugal",
                  "displayAirlineCode": "TP",
                  "displayAirlineName": "TAP Air Portugal",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "18:45",
                  "arrivalTime": "09:10",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "ORY",
                  "arrivalAirportName": "Paris Orly",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Mon 12 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "N",
                  "flexiblePolicyUrl": "https://www.flytap.com/en-pt/latest-updates",
                  "travelDays": 1,
                  "marketingCompany": null,
                  "departureTimeText": "18:45",
                  "arrivalTimeText": "09:10",
                  "departureTimeData": "1845",
                  "arrivalTimeData": "910",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "1845TPLHR.4.910UXMAD",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "132",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "84"
        },
        {
          "id": 23,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 184.44704,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 3355,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Athens",
                      "displayAirlineName": "Aegean Airlines",
                      "id": 1,
                      "flightNumber": "609",
                      "aircraftCode": null,
                      "marketingAirlineCode": "A3",
                      "operatingAirlineCode": "A3",
                      "departureDateTime": {
                        "date": "2020-10-10 22:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 03:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+03:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "ATH",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D9H25M",
                      "technicalStops": 0,
                      "displayAirlineCode": "A3",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://en.aegeanair.com/aegean-announcement/"
                    },
                    {
                      "departureAirportName": "Athens",
                      "arrivalAirportName": "Amsterdam",
                      "displayAirlineName": "Aegean Airlines",
                      "id": 2,
                      "flightNumber": "626",
                      "aircraftCode": null,
                      "marketingAirlineCode": "A3",
                      "operatingAirlineCode": "A3",
                      "departureDateTime": {
                        "date": "2020-10-11 13:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+03:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 15:45:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "ATH",
                      "arrivalAirportCode": "AMS",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D3H15M",
                      "technicalStops": 0,
                      "displayAirlineCode": "A3",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://en.aegeanair.com/aegean-announcement/"
                    },
                    {
                      "departureAirportName": "Amsterdam",
                      "arrivalAirportName": "Madrid Barajas",
                      "displayAirlineName": "Air Europa",
                      "id": 3,
                      "flightNumber": "1094",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-11 19:00:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 21:40:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "AMS",
                      "arrivalAirportCode": "MAD",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D9H30M",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    },
                    {
                      "departureAirportName": "Madrid Barajas",
                      "arrivalAirportName": "Paris Orly",
                      "displayAirlineName": "Air Europa",
                      "id": 4,
                      "flightNumber": "1027",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-12 07:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-12 09:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "MAD",
                      "arrivalAirportCode": "ORY",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7024,
                  "eft": "33h 55m",
                  "stops": 3,
                  "operatingAirlineCode": "A3",
                  "operatingAirlineName": "Aegean Airlines",
                  "displayAirlineCode": "A3",
                  "displayAirlineName": "Aegean Airlines",
                  "displayAllianceName": null,
                  "departureTime": "22:15",
                  "arrivalTime": "09:10",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "ORY",
                  "arrivalAirportName": "Paris Orly",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Mon 12 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://en.aegeanair.com/aegean-announcement/",
                  "travelDays": 1,
                  "marketingCompany": null,
                  "departureTimeText": "22:15",
                  "arrivalTimeText": "09:10",
                  "departureTimeData": "2215",
                  "arrivalTimeData": "910",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "2215A3LHR.4.910UXMAD",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "184",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "45"
        },
        {
          "id": 24,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 186.57433999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 3355,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Heathrow",
                      "arrivalAirportName": "Athens",
                      "displayAirlineName": "Aegean Airlines",
                      "id": 1,
                      "flightNumber": "609",
                      "aircraftCode": null,
                      "marketingAirlineCode": "A3",
                      "operatingAirlineCode": "A3",
                      "departureDateTime": {
                        "date": "2020-10-10 22:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 03:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+03:00"
                      },
                      "departureAirportCode": "LHR",
                      "arrivalAirportCode": "ATH",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D4H45M",
                      "technicalStops": 0,
                      "displayAirlineCode": "A3",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://en.aegeanair.com/aegean-announcement/"
                    },
                    {
                      "departureAirportName": "Athens",
                      "arrivalAirportName": "Munich",
                      "displayAirlineName": "Aegean Airlines",
                      "id": 2,
                      "flightNumber": "802",
                      "aircraftCode": null,
                      "marketingAirlineCode": "A3",
                      "operatingAirlineCode": "A3",
                      "departureDateTime": {
                        "date": "2020-10-11 08:35:00.000000",
                        "timezone_type": 1,
                        "timezone": "+03:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 10:15:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "ATH",
                      "arrivalAirportCode": "MUC",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D9H10M",
                      "technicalStops": 0,
                      "displayAirlineCode": "A3",
                      "flexibleChange": "N",
                      "flexibleCancellation": "Y",
                      "flexiblePolicyUrl": "https://en.aegeanair.com/aegean-announcement/"
                    },
                    {
                      "departureAirportName": "Munich",
                      "arrivalAirportName": "Madrid Barajas",
                      "displayAirlineName": "Air Europa",
                      "id": 3,
                      "flightNumber": "1518",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-11 19:25:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 22:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "MUC",
                      "arrivalAirportCode": "MAD",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D9H0M",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    },
                    {
                      "departureAirportName": "Madrid Barajas",
                      "arrivalAirportName": "Paris Orly",
                      "displayAirlineName": "Air Europa",
                      "id": 4,
                      "flightNumber": "1027",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-12 07:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-12 09:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "MAD",
                      "arrivalAirportCode": "ORY",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7025,
                  "eft": "33h 55m",
                  "stops": 3,
                  "operatingAirlineCode": "A3",
                  "operatingAirlineName": "Aegean Airlines",
                  "displayAirlineCode": "A3",
                  "displayAirlineName": "Aegean Airlines",
                  "displayAllianceName": null,
                  "departureTime": "22:15",
                  "arrivalTime": "09:10",
                  "departureAirportCode": "LHR",
                  "departureAirportName": "London Heathrow",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "ORY",
                  "arrivalAirportName": "Paris Orly",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Mon 12 Oct",
                  "flexibleChange": "N",
                  "flexibleCancellation": "Y",
                  "flexiblePolicyUrl": "https://en.aegeanair.com/aegean-announcement/",
                  "travelDays": 1,
                  "marketingCompany": null,
                  "departureTimeText": "22:15",
                  "arrivalTimeText": "09:10",
                  "departureTimeData": "2215",
                  "arrivalTimeData": "910",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "2215A3LHR.4.910UXMAD",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "186",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "57"
        },
        {
          "id": 25,
          "fare": {
            "currencyCode": "GBP",
            "codeshareCompanyAdult": "",
            "codeshareCompanyChild": "",
            "codeshareCompanyInfant": "",
            "total": 195.40769999999998,
            "markupPerPaxGbp": 4
          },
          "lowestEft": 3250,
          "groupSegments": [
            {
              "label": "Departure on Sat 10 Oct '20",
              "segments": [
                {
                  "legs": [
                    {
                      "departureAirportName": "London Stansted",
                      "arrivalAirportName": "Istanbul Sabiha Gokcen",
                      "displayAirlineName": "Turkish Airlines",
                      "id": 1,
                      "flightNumber": "7831",
                      "aircraftCode": null,
                      "marketingAirlineCode": "TK",
                      "operatingAirlineCode": "TK",
                      "departureDateTime": {
                        "date": "2020-10-10 23:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+01:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 05:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+03:00"
                      },
                      "departureAirportCode": "STN",
                      "arrivalAirportCode": "SAW",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D4H10M",
                      "technicalStops": 0,
                      "displayAirlineCode": "TK",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.turkishairlines.com/en-ie/zero-change-fee/"
                    },
                    {
                      "departureAirportName": "Istanbul Sabiha Gokcen",
                      "arrivalAirportName": "Brussels (All Airports)",
                      "displayAirlineName": "Turkish Airlines",
                      "id": 2,
                      "flightNumber": "7720",
                      "aircraftCode": null,
                      "marketingAirlineCode": "TK",
                      "operatingAirlineCode": "TK",
                      "departureDateTime": {
                        "date": "2020-10-11 09:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+03:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 11:50:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "SAW",
                      "arrivalAirportCode": "BRU",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D7H5M",
                      "technicalStops": 0,
                      "displayAirlineCode": "TK",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.turkishairlines.com/en-ie/zero-change-fee/"
                    },
                    {
                      "departureAirportName": "Brussels (All Airports)",
                      "arrivalAirportName": "Madrid Barajas",
                      "displayAirlineName": "Air Europa",
                      "id": 3,
                      "flightNumber": "1174",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-11 18:55:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-11 21:20:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "BRU",
                      "arrivalAirportCode": "MAD",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "0D9H50M",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    },
                    {
                      "departureAirportName": "Madrid Barajas",
                      "arrivalAirportName": "Paris Orly",
                      "displayAirlineName": "Air Europa",
                      "id": 4,
                      "flightNumber": "1027",
                      "aircraftCode": null,
                      "marketingAirlineCode": "UX",
                      "operatingAirlineCode": "UX",
                      "departureDateTime": {
                        "date": "2020-10-12 07:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "arrivalDateTime": {
                        "date": "2020-10-12 09:10:00.000000",
                        "timezone_type": 1,
                        "timezone": "+02:00"
                      },
                      "departureAirportCode": "MAD",
                      "arrivalAirportCode": "ORY",
                      "departureTerminal": "",
                      "arrivalTerminal": "",
                      "class": "",
                      "cabinRbd": "",
                      "amenities": [],
                      "connectionTime": "",
                      "technicalStops": 0,
                      "displayAirlineCode": "UX",
                      "flexibleChange": "Y",
                      "flexibleCancellation": "N",
                      "flexiblePolicyUrl": "https://www.aireuropa.com/es/en/aea/comunicados.html"
                    }
                  ],
                  "seatsAvailable": 9,
                  "bag": {
                    "allow": 0,
                    "code": "pc"
                  },
                  "key": 1,
                  "itineraryId": 7026,
                  "eft": "32h 50m",
                  "stops": 3,
                  "operatingAirlineCode": "TK",
                  "operatingAirlineName": "Turkish Airlines",
                  "displayAirlineCode": "TK",
                  "displayAirlineName": "Turkish Airlines",
                  "displayAllianceName": "Star Alliance",
                  "departureTime": "23:20",
                  "arrivalTime": "09:10",
                  "departureAirportCode": "STN",
                  "departureAirportName": "London Stansted",
                  "departureAirportCity": "London",
                  "arrivalAirportCode": "ORY",
                  "arrivalAirportName": "Paris Orly",
                  "arrivalAirportCity": "Paris",
                  "departureDateText": "Sat 10 Oct",
                  "arrivalDateText": "Mon 12 Oct",
                  "flexibleChange": "Y",
                  "flexibleCancellation": "N",
                  "flexiblePolicyUrl": "https://www.turkishairlines.com/en-ie/zero-change-fee/",
                  "travelDays": 1,
                  "marketingCompany": null,
                  "departureTimeText": "23:20",
                  "arrivalTimeText": "09:10",
                  "departureTimeData": "2320",
                  "arrivalTimeData": "910",
                  "isRefundable": false,
                  "fareFamilyName": null,
                  "fareFamilyServiceIncluded": null,
                  "fareFamilyServiceCharged": null,
                  "fareFamilyServiceNotoffered": null,
                  "fareFamilyServices": "",
                  "itineraryGroupId": "2320TKSTN.4.910UXMAD",
                  "mtp": 1
                }
              ],
              "supplements": []
            }
          ],
          "fareTotalPrefix": "&#163;",
          "fareTotalSuffix": "",
          "fareTotalIntText": "195",
          "fareTotalDecimalPoint": ".",
          "fareTotalDecText": "41"
        }
      ],
      "segmentCount": 1
    }
  )
}
