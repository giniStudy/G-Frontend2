import axios from 'axios';
import { useState } from 'react';
import Error from '../components/Error';
import Gnb from '../components/Gnb';
import Loading from '../components/Loading';
import { Hook } from '../utils';

const Board = (props) => {
  const [page] = useState(1);
  const { loading, data, error } = Hook.useAsync(async () => {
    const response = await axios.get('http://15.164.245.110/board');
    return response;
  }, [page]);
  const { boards = [] } = data || {};

  return (
    <div>
      <Gnb />
      {loading && <Loading />}
      {error && <Error />}
      {!loading &&
        !error &&
        data &&
        boards.map((board) => <h4 key={board.id}>{board.content}</h4>)}
    </div>
  );
};
export default Board;
