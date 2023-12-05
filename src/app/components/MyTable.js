const defaultColumns = [

    {
        title: 'Title',
        key: 'title'
    },
    {
        title: 'Subtitle',
        key: 'subtitle'
    },
    {
        title: 'Image',
        key: 'img'
    },
    {
        title: 'Description',
        key: 'description'
    },

]

const defaultRecords = [

    {
        title: 'DEFAULT',
        subtitle: 'DEFAULT',
        img: 'DEFAULT',
        description: 'DEFAULT',
    }

]

export default function MyTable({ columns = defaultColumns, records = defaultRecords }) {
    return (
      <MyTable.Root>
        <MyTable.Header>
          <MyTable.Row>
            {columns.map((column) => (
              <MyTable.ColumnHeaderCell key={column.key}>{column.title}</MyTable.ColumnHeaderCell>
            ))}
          </MyTable.Row>
        </MyTable.Header>

        <MyTable.Body>
          {records.map((record) => (
            <MyTable.Row key={record.title}>
              {columns.map((column, idx) => (
                <MyTable.Cell key={idx}>{record[column.key]}</MyTable.Cell>
              ))}
            </MyTable.Row>
          ))}
        </MyTable.Body>
      </MyTable.Root>
    );
  }