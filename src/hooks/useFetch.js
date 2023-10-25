import { useState } from "react"
import { useEffect } from "react"
export const useFetch = (fetchApi) => {
  const [data, setData] = useState([])
  console.log("data: ", data)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)
      try {
        const result = await fetchApi()
        setData(result)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setError(true)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error, setData }
}
