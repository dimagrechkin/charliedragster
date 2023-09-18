import { useState } from 'react'
import { useGetSpeciesQuery, useGetSpeciesWithPaginationQuery } from '../features/apiSlice'
import { CardList } from '../components/CardDetails'
import { Spinner, Error } from '../components'
import { useLocation } from 'react-router-dom'

const Species = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { pathname } = useLocation()
  const [type] = pathname.split('/').filter(Boolean)

  const { data: allSpecies = [], isLoading: isAllLoading, isError: isAllError } = useGetSpeciesQuery()
  const { data: currentPageData = [], isLoading, isError } = useGetSpeciesWithPaginationQuery(currentPage)

  if (isLoading || isAllLoading) {
    return <Spinner />
  }

  if (isError || isAllError) {
    return <Error />
  }

  return (
    <section className="flex flex-col p-4 bg-white">
      <h1 className="text-xl font-semibold">Species</h1>

      <CardList data={currentPageData} totalItems={allSpecies.length} setCurrentPage={setCurrentPage} type={type} />
    </section>
  )
}

export default Species
