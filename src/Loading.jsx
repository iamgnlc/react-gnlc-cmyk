import React, { memo } from 'react';
import ReactLoading from 'react-loading';

const Loading = () => <ReactLoading type="bubbles" color="#ddd" />;

Loading.displayname = 'Loading';

export default memo(Loading);
