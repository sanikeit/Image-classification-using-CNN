import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

// export const options = {
//   chart: {
//     id: 'apexchart-example'
//   },
//   xaxis: {
//     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//   }
// }

// export const series = [
//   {
//     name: 'series-1',
//     data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//   }
// ]

export default function Graph(props) {
  const [options, setOptions] = useState({})
  const [series, setSeries] = useState([])
  useEffect(() => {
    const opt = {
      stroke: {
        curve: "smooth",
        width: 3
      },
      chart: {
        id: 'apexchart-example'
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: Object.keys(props.data.series)
      },
      yaxis: {
        tickAmount: 10,
        min: 0,
        max: 1,
        labels: {
          formatter: function(val) {
            return val.toFixed(1)
          }
        },
      },
      fill: {
        type: 'solid',
        fillOpacity: 0.4
      }
    }
    const ser = [
      {
        name: props.data.name,
        data: Object.values(props.data.series)
      }
    ]

    setOptions(opt)
    setSeries(ser)
  }, [])

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={500}
      height={320}
    />
  )
}
