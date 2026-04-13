import './Tabela.css';

function Tabela({ headers, data }) {
  return (
    <table className="card-table">
      <thead>
        <tr>
          {/* Percorre o array de headers para criar os <th> */}
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Percorre o array principal (linhas) */}
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* Percorre o array interno (células de cada linha) */}
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;