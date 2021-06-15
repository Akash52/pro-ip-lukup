import React from 'react'

const Card = ({ Ip }) => {
  return (
    <>
      <div className="w-full bg-gray-200  dark:bg-gray-900 py-10">
        <div className="container mx-auto px-6 flex items-start ">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col  lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 px-12 flex flex-col  py-10">
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Version : <span className="text-blue-500">{Ip.version} </span>
                </h2>
                <h2 className="text-gray-800 font-bold dark:text-gray-100 text-xl tracking-normal  mb-2">
                  City : <span className="text-blue-500">{Ip.city} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Region : <span className="text-blue-500">{Ip.region} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Region Code :{' '}
                  <span className="text-blue-500">{Ip.region_code} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Country Name :{' '}
                  <span className="text-blue-500">{Ip.country_name} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Country Code :{' '}
                  <span className="text-blue-500">{Ip.country_code} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Country Code_iso3 :{' '}
                  <span className="text-blue-500">{Ip.country_code_iso3} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Country Capital :{' '}
                  <span className="text-blue-500">{Ip.country_capital} </span>
                </h2>
              </div>

              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-start py-10">
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Country calling code :{' '}
                  <span className="text-blue-500">
                    {Ip.country_calling_code}{' '}
                  </span>
                </h2>
                <h2 className="text-gray-800 font-bold dark:text-gray-100 text-xl tracking-normal  mb-2">
                  Postal: <span className="text-blue-500">{Ip.postal} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Latitude :{' '}
                  <span className="text-blue-500">{Ip.latitude} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Longitude :{' '}
                  <span className="text-blue-500">{Ip.longitude} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Timezone :{' '}
                  <span className="text-blue-500">{Ip.timezone} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Currency :{' '}
                  <span className="text-blue-500">{Ip.currency} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Currency name :{' '}
                  <span className="text-blue-500">{Ip.currency_name} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Country Capital :{' '}
                  <span className="text-blue-500">{Ip.country_capital} </span>
                </h2>
              </div>

              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-start py-10">
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Languages :{' '}
                  <span className="text-blue-500 break-all">
                    {Ip.languages}{' '}
                  </span>
                </h2>
                <h2 className="text-gray-800 font-bold dark:text-gray-100 text-xl tracking-normal  mb-2">
                  Country area:{' '}
                  <span className="text-blue-500">{Ip.country_area} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  Country population :{' '}
                  <span className="text-blue-500">
                    {Ip.country_population}{' '}
                  </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  ASN : <span className="text-blue-500">{Ip.asn} </span>
                </h2>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-bold mb-2">
                  ORG : <span className="text-blue-500">{Ip.org} </span>
                </h2>
              </div>
            </div>
          </div>
          {/* Card code block end */}
        </div>
      </div>
    </>
  )
}

export default Card
