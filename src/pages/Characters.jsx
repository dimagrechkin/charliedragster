import { useState } from 'react'
import { useGetCharactersQuery, useGetCharactersWithPaginationQuery } from '../features/apiSlice'
import { CardList } from '../components/CardDetails'
import { Spinner, Error } from '../components'
import { useLocation } from 'react-router-dom'

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { pathname } = useLocation()
  const [type] = pathname.split('/').filter(Boolean)

  const { data: allCharacters = [], isLoading: isAllLoading, isError: isAllError } = useGetCharactersQuery()
  const { data: currentPageData = [], isLoading, isError } = useGetCharactersWithPaginationQuery(currentPage)

  if (isLoading || isAllLoading) {
    return <Spinner />
  }

  if (isError || isAllError) {
    return <Error />
  }

  return (
    <section className="flex flex-col p-4 bg-white">
      <h1 className="text-xl font-semibold">Characters</h1>

      <CardList data={currentPageData} totalItems={allCharacters.length} setCurrentPage={setCurrentPage} type={type} />
    </section>
  )
}

export default Characters
