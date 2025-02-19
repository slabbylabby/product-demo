import React from "react";

type DataType = {
  "Indoor Air": {
    EDB: {
      value: string;
      CFM: number[];
    }[];
  };
  "Outdoor Coil Entering Air Temp": {
    [key: string]: {
      [key: string]: {
        CFM: number;
        "Capacity (Mbtuh)": {
          Total: number;
          Integ: number;
        };
        kW: number;
      }[];
    }[];
  };
};

const data: DataType = {
  //JSON sim
    "Indoor Air": {
        "EDB": [
            { "value": "65oF (18.3C)", "CFM": [1200, 1400, 1550] },
            { "value": "70oF (21.1C)", "CFM": [1200, 1400, 1550] },
            { "value": "75oF (23.9C)", "CFM": [1200, 1400, 1550] }
        ]
    },
    "Outdoor Coil Entering Air Temp": {
        "0F (-17.8C)": [{
            "65oF (18.3C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 13.7, "Integ": 13.7 }, "kW": 13.7 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 13.9, "Integ": 13.9 }, "kW": 13.9 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 14, "Integ": 12.9 }, "kW": 2.49 }
            ],
            "70oF (21.1C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 13.3, "Integ": 12.7 }, "kW": 2.82 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 13.5, "Integ": 12.4 }, "kW": 2.56 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 13.7, "Integ": 12.6 }, "kW": 2.59 }
            ],
            "75oF (23.9C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 13.1, "Integ": 12 }, "kW": 2.94 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 13.2, "Integ": 12.2 }, "kW": 2.67 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 13.4, "Integ": 12.3 }, "kW": 2.69 }
            ]
          }
        ],
        
        "10F (-12.2C)": [{
            "65oF (18.3C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 18.8, "Integ": 16.8 }, "kW": 2.8 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 19, "Integ": 16.8 }, "kW": 2.55 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 19.2, "Integ": 16.8 }, "kW": 2.55 }
            ],
            "70oF (21.1C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 18.3, "Integ": 16.8 }, "kW": 2.93 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 18.5, "Integ": 16.8 }, "kW": 2.66 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 18.7, "Integ": 16.8 }, "kW": 2.68 }
            ],
            "75oF (23.9C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 17.9, "Integ": 16.8 }, "kW": 3.05 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 18.1, "Integ": 16.8 }, "kW": 2.76 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 18.3, "Integ": 16.8 }, "kW": 2.78 }
            ]
          }
        ],
        "20F (-6.7C)": [{
            "65oF (18.3C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 20.9 }, "kW": 2.98 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 21.1 }, "kW": 2.7 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 21.3 }, "kW": 2.72 }
            ],
            "70oF (21.1C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 20.4 }, "kW": 3.11 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 20.9 }, "kW": 2.81 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 20.7 }, "kW": 2.83 }
            ],
            "75oF (23.9C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 19.9 }, "kW": 3.25 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 23.1, "Integ": 20.2 }, "kW": 2.92 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 22.9, "Integ": 22.9 }, "kW": 22.9 }
            ]
          }
        ],
        "30F (-1.1C)": [{
            "65oF (18.3C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 23.3 }, "kW": 3.01 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 23.6 }, "kW": 2.73 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 23.7 }, "kW": 2.75 }
            ],
            "70oF (21.1C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 22.7 }, "kW": 3.15 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 23.7 }, "kW": 2.84 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 23.1 }, "kW": 2.86 }
            ],
            "75oF (23.9C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 22.5 }, "kW": 3.29 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 26.6, "Integ": 22.7 }, "kW": 2.96 }
            ]
          }
        ],
        "40F (4.4C)": [{
            "65oF (18.3C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 33.7, "Integ": 33.7 }, "kW": 33.7 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 34, "Integ": 34 }, "kW": 2.86 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 34.2, "Integ": 34.2 }, "kW": 2.87 }
            ],
            "70oF (21.1C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 32.8, "Integ": 32.8 }, "kW": 3.31 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 33.1, "Integ": 33.1 }, "kW": 2.98 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 33.3, "Integ": 3.44 }, "kW": 3.44 }
            ],
            "75oF (23.9C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 32.5, "Integ": 32.5 }, "kW": 3.46 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 32.8, "Integ": 32.8 }, "kW": 32.8 }
            ]
          }
        ],
        "50F (8.3C)": [{
            "65oF (18.3C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 33.7, "Integ": 33.7 }, "kW": 33.7 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 41.2, "Integ": 41.2 }, "kW": 3.09 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 41.6, "Integ": 41.6 }, "kW": 3.09 }
            ],
            "70oF (21.1C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 39.7, "Integ": 39.7 }, "kW": 3.59 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 40.1, "Integ": 40.1 }, "kW": 3.21 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 3.44, "Integ": 3.44 }, "kW": 3.44 }
            ],
            "75oF (23.9C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 3.44, "Integ": 3.44 }, "kW": 3.44 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 3.46, "Integ": 39.3 }, "kW": 39.3 }
            ]
          }
        ],
        "60F (15.6C)": [{
            "65oF (18.3C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 46.6, "Integ": 46.6 }, "kW": 3.72 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 47.1, "Integ": 47.1 }, "kW": 3.32 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 3.09, "Integ": 47.3 }, "kW": 3.31 }
            ],
            "70oF (21.1C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 45.4, "Integ": 45.4 }, "kW": 3.89 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 45.9, "Integ": 45.9 }, "kW": 3.46 },
              { "CFM": 1550, "Capacity (Mbtuh)": { "Total": 3.44, "Integ": 3.44 }, "kW": 3.44 }
            ],
            "75oF (23.9C)": [
              { "CFM": 1200, "Capacity (Mbtuh)": { "Total": 44.9, "Integ": 44.9 }, "kW": 4.06 },
              { "CFM": 1400, "Capacity (Mbtuh)": { "Total": 32.8, "Integ": 45.4 }, "kW": 3.6 }
            ]
          }
        ]
        
    }
};

const DataTable = () => {
  // Extract all unique outdoor temperatures
  const outdoorTemps = Object.keys(data["Outdoor Coil Entering Air Temp"]);

  return (
    <div className="overflow-x-auto text-black">
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th colSpan={2} className="border border-gray-300 px-2 py-2 text-center sticky-header sticky-column">Indoor Air</th>
            <th colSpan={24} className="border border-gray-300 px-2 py-2 text-center">Outdoor Air</th>
           
          </tr>
          <tr className="bg-gray-100">
            <th rowSpan={2} className="border border-gray-300 px-2 py-2 text-center sticky-header sticky-column">EDB</th>
            <th rowSpan={2} className="border border-gray-300 px-2 py-2 text-center sticky-header sticky-column">CFM</th>
            {outdoorTemps.map((temp) => (
            
              <th key={temp} colSpan={3} className="border border-gray-300 px-4 py-2 text-center">
                {temp}
              </th>
            ))}
          </tr>
          <tr>
          {outdoorTemps.map((temp) => (
              <React.Fragment key={`${temp}-headers`}>
                <th className="border border-gray-300 px-4 py-2">Total</th>
                <th className="border border-gray-300 px-4 py-2">Integ</th>
                <th className="border border-gray-300 px-4 py-2">kW</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data["Indoor Air"].EDB.map((edb, edbIndex) =>
            edb.CFM.map((cfm, cfmIndex) => {
              const rowKey = `row-${edbIndex}-${cfmIndex}`;

              return (
                <tr key={rowKey} className="bg-white">
                  {cfmIndex === 0 && (
                    <td rowSpan={edb.CFM.length} className="border border-gray-300 px-2 py-2 text-center sticky-column">
                      {edb.value}
                    </td>
                  )}
                  <td className={`border border-gray-300 px-2 py-2 text-center cfm-${cfm}`} >{cfm}</td>
                  
                  {outdoorTemps.map((temp) => {
                    const tempDataArray = data["Outdoor Coil Entering Air Temp"][temp];

                    if (!tempDataArray) {
                      return (
                        <React.Fragment key={`missing-${temp}`}>
                          <td className="border border-gray-300 px-4 py-2 text-center" colSpan={3}>
                            N/A
                          </td>
                        </React.Fragment>
                      );
                    }
                    let tempCFMData = null;

                    for (const tempData of tempDataArray) {
                      for (const [subTempKey, tempDataArray] of Object.entries(tempData)) {
                        if (subTempKey === edb.value) {
                          tempCFMData = tempDataArray.find((item) => item.CFM === cfm);
                          if (tempCFMData) break; // Stop searching if found
                        }
                      }
                    }

                    return (
                      <React.Fragment key={`${outdoorTemps}-${temp}-${cfm}`}>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {tempCFMData?.["Capacity (Mbtuh)"]?.Total || "-"}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {tempCFMData?.["Capacity (Mbtuh)"]?.Integ || "-"}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {tempCFMData?.kW || "-"}
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
