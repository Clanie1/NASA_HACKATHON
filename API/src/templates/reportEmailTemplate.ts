const naturalDisasterEventTypes = {
  EQ: "Earthquakes and related seismic activities",
  TC: "Tropical cyclones, including hurricanes, typhoons, and cyclones",
  WF: "Wildfires and related fire events. Includes wildfires, burn off, bushfire, fires, pre fire alerts, structure fire",
  FL: "Floods, including flash floods and general flooding",
  ET: "Extreme temperature events, including heat waves, cold waves, hot day conditions, etc.",
  DR: "Droughts and prolonged dry conditions",
  SW: "Severe storms, thunderstorms, and related weather phenomena. Includes lightning, gusty winds, thunder shower, violent wind, storm surge, lightning, hailstorm, heavy rain and light rain",
  SI: "Sea ice conditions",
  VO: "Volcanic activities and eruptions",
  LS: "Landslides, avalanches, and related ground movement",
  TN: "Tsunamis and related sea waves",
  Misc: "Miscellaneous events, including unique imagery and technical disasters",
};

const getReportEmailTemplate = (
  id: string,
  weatherData: any,
  disasterData: any,
  subject: string
) => {
  return `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      
      @media only screen and (min-width: 520px) {
        .u-row {
          width: 500px !important;
        }

        .u-row .u-col {
          vertical-align: top;
        }

        
            .u-row .u-col-100 {
              width: 500px !important;
            }
          
      }

      @media only screen and (max-width: 520px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }

        .u-row {
          width: 100% !important;
        }

        .u-row .u-col {
          display: block !important;
          width: 100% !important;
          min-width: 320px !important;
          max-width: 100% !important;
        }

        .u-row .u-col > div {
          margin: 0 auto;
        }


        .u-row .u-col img {
          max-width: 100% !important;
        }

}
    
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}



table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #F7F8F9;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #F7F8F9;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #F7F8F9;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://cdn.pixabay.com/photo/2021/08/10/10/06/pinwheels-6535599_1280.jpg" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 480px;" width="480"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: arial black,AvenirNext-Heavy,avant garde,arial; font-size: 25px; font-weight: 700; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 140%;">VineGuard Daily Report</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: 'Montserrat',sans-serif; font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="line-height: 140%;">LAT ${getLatitude(
      weatherData
    )}       LOG ${getLongitude(weatherData)}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: arial black,AvenirNext-Heavy,avant garde,arial; font-size: 18px; font-weight: 700; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">  Yesterday Data 💽</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: 'Montserrat',sans-serif; font-size: 14px; line-height: 200%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 200%;">Temperature: ${getTemperature(
      weatherData
    )} °C 🌡️</p>
<p style="line-height: 200%;">Precipitation Last 24 hr: ${getPrecipitation24Hr(
    weatherData
  )} millimeters 💧</p>
<p style="line-height: 200%;">Relative Humidity: ${getRelativeHumidity(
    weatherData
  )} 💨</p>
<p style="line-height: 200%;">Sunrise: ${getSunrise(weatherData)} PTD 🌅</p>
<p style="line-height: 200%;">Sunset: ${getSunset(weatherData)} PTD 🎴</p>
<p style="line-height: 200%;">Cloud Cover: 8 octas ☁️</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: arial black,AvenirNext-Heavy,avant garde,arial; font-size: 18px; font-weight: 700; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Future Predictions 📈</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: andale mono,times; font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">*No future predictions today* 🙏</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: arial black,AvenirNext-Heavy,avant garde,arial; font-size: 18px; font-weight: 700; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Potential Disasters 🌪️</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: 'Montserrat',sans-serif; font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">*No potential disasters nearby today* 🙏</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: arial black,AvenirNext-Heavy,avant garde,arial; font-size: 18px; font-weight: 700; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">ChatBot 🤖</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: 'Montserrat',sans-serif; font-size: 14px; font-weight: 400; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">🌾 Struggling with crop issues or water management? Our specialized chatbot is here to help! 🌱</p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;">Whether you’re facing challenges with pests, plant diseases, or irrigation, simply ask the chatbot, and get expert advice in real time. Powered by cutting-edge technology, it’s designed to provide tailored solutions for every farmer, making your farming smarter, easier, and more efficient.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
<div align="center">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:37px; v-text-anchor:middle; width:480px;" arcsize="11%"  stroke="f" fillcolor="#e0d33a"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
    <a href="http://localhost:3001/chatbot/${id}" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e0d33a; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:100%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
      <span style="display:block;padding:10px 20px;line-height:120%;"><span style="line-height: 16.8px;">Go Chat!</span></span>
    </a>
    <!--[if mso]></center></v:roundrect><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://assets.unlayer.com/projects/0/1728198958093-456143.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 480px;" width="480"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
  `;
};

function getTemperature(weatherData: any) {
  const temperatureData = weatherData.data.find(
    (param: any) => param.parameter === "t_2m:C"
  );

  if (!temperatureData) {
    console.error("No temperature data found.");
    return null;
  }

  const temperatureValues = temperatureData.coordinates[0].dates
    .filter((d: any) => d.date.startsWith("2024-10-05")) // Filter for 2024-10-05 only
    .map((d: any) => d.value); // Extract values

  const averageTemperature =
    temperatureValues.reduce((sum: number, value: number) => sum + value, 0) /
    temperatureValues.length;

  return averageTemperature;
}

function getPrecipitation24Hr(weatherData: any) {
  const precipitationData = weatherData.data.find(
    (param: any) => param.parameter === "precip_1h:mm"
  );

  if (!precipitationData) {
    console.error("No precipitation data found.");
    return null;
  }

  const precipitationValues = precipitationData.coordinates[0].dates
    .filter((d: any) => d.date.startsWith("2024-10-05")) // Filter for 2024-10-05 only
    .map((d: any) => d.value); // Extract values

  const averagePrecipitation =
    precipitationValues.reduce((sum: number, value: number) => sum + value, 0) /
    precipitationValues.length;

  return averagePrecipitation;
}

function getRelativeHumidity(wheatherData: any) {
  const humidityData = wheatherData.data.find(
    (param: any) => param.parameter === "relative_humidity_2m:p"
  );

  if (!humidityData) {
    console.error("No relative humidity data found.");
    return null;
  }

  const humidityValues = humidityData.coordinates[0].dates
    .filter((d: any) => d.date.startsWith("2024-10-05")) // Filter for 2024-10-05 only
    .map((d: any) => d.value); // Extract values

  const averageHumidity =
    humidityValues.reduce((sum: number, value: number) => sum + value, 0) /
    humidityValues.length;

  return averageHumidity;
}

function getSunrise(weatherData: any) {
  const sunriseData = weatherData.data.find(
    (param: any) => param.parameter === "sunrise:sql"
  );

  if (!sunriseData || !sunriseData.coordinates[0].dates[0]) {
    console.error("No sunrise data found.");
    return null;
  }

  const sunriseEntry = sunriseData.coordinates[0].dates[0];

  const sunriseTime = new Date(sunriseEntry.value).toISOString().substr(11, 5);

  return sunriseTime;
}

function getSunset(weatherData: any) {
  const sunsetData = weatherData.data.find(
    (param: any) => param.parameter === "sunset:sql"
  );

  if (!sunsetData || !sunsetData.coordinates[0].dates[0]) {
    console.error("No sunset data found.");
    return null;
  }

  const sunsetEntry = sunsetData.coordinates[0].dates[0];

  const sunsetTime = new Date(sunsetEntry.value).toISOString().substr(11, 5);

  return sunsetTime;
}

function getLatitude(data: any) {
  const coordinateData = data.data[0]?.coordinates[0];

  if (!coordinateData) {
    console.error("No coordinate data found.");
    return null;
  }

  const latitude = coordinateData.lat;

  return latitude;
}

function getLongitude(data: any) {
  const coordinateData = data.data[0]?.coordinates[0];

  if (!coordinateData) {
    console.error("No coordinate data found.");
    return null;
  }

  const longitude = coordinateData.lon;

  return longitude;
}

export { getReportEmailTemplate };
