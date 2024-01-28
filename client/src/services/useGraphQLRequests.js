import { useQuery } from '@tanstack/react-query'

import { request, gql } from 'graphql-request'

const endpoint = process.env.REACT_APP_GRAPHQL_API_URL

export function useGeoLocate(ipAddress) {
    return useQuery({
        queryKey: ["GeoLocateViaIP", ipAddress], 
        queryFn: async () => request(
                endpoint,
                gql`
                    query {
                        GeoLocateViaIP(ipAddress: "${ipAddress}") {
                            ipAddress
                            ipVersion
                            cityName
                            continent
                            countryCode
                            latitude
                            longitude
                            regionName
                            timeZone
                            zipCode
                        }
                    }
                `,
                null,
                {
                    Authorization: `Bearer ${ process.env.REACT_APP_VIP_MESH_API_KEY }`,
                },
            ),
        })
}