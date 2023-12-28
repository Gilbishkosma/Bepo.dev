interface tableProp {
  heading: string[];
  rows: [string[]];
}

const Table = ({ heading, rows }: tableProp) => {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table border-collapse border border-slate-400'>
          <thead>
            <tr>
              {heading.map((item, index) => (
                <th
                  key={index}
                  className='border border-slate-300 bg-slate-100 !px-3'
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className='hover'>
                {row.map((value, i) => (
                  <td key={i} className='border border-slate-300 !px-3'>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
