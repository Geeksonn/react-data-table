import './Row.css'

const Row = ({ rowKey, data, isHeader }) => {
    console.log('Input data: ', data)
    return (
        <tr key={rowKey}>
            {data.map((item, idx) => {
                if (isHeader) {
                    return (
                        <th
                            key={rowKey + '_tdItem_' + idx}
                            className={item.className}>
                            {item.value}
                        </th>
                    );
                }
                else {
                    return (
                        <td
                            key={rowKey + '_tdItem_' + idx}
                            className={item.className}>
                            {item.value}
                        </td>
                    );
                }
            })}
        </tr>
    );
}

export default Row;