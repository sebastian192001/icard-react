import React from 'react'
import { Table, Image, Button, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import "./TableCategoryAdmin.scss"

export function TableCategoryAdmin(props) {
  const { categories, updateCategory, deleteCategory } = props
  return (
    <Table className = "table-category-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell>Categoria</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      
      <Table.Body>
        {map (categories, (Category, index) => (
          <Table.Row key={index}>
            <Table.Cell width = {2}>
            <Image src = {Category.image}/>
            </Table.Cell>
            <Table.Cell> {Category.title} </Table.Cell>

            <Actions 
              Category = { Category } 
              updateCategory = {updateCategory} 
              deleteCategory = {deleteCategory} 
            />

          </Table.Row>
        ))}
      </Table.Body>

    </Table>
  )
}

function Actions(props) {
  const { Category, updateCategory, deleteCategory } = props 
  return (
    <Table.Cell textAlign = "right">
      <Button icon onClick={() => updateCategory(Category) }>
        <Icon name='pencil'/>
      </Button>
      <Button icon negative onClick={ () => deleteCategory(Category) }>
        <Icon name='close'/>
      </Button>
    </Table.Cell>
  )
}
