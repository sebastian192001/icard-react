import React, { useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { HeaderPage, TableListAdmin } from "../../components/Admin"
import { useTable } from "../../hooks" 


export function OrdersAdmin() {

  const { loading, tables, getTables } = useTable()

  useEffect(() => {getTables()}, [])

  

  return (
    <>
        <HeaderPage title = "Restaurante" />
        {loading? (
          <Loader active inline = "centered">
            Cargando...
          </Loader>
        ) : (
          <TableListAdmin  tables = {tables} />
        )}
    </>
  )
}
