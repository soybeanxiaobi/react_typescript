import React from "react";
import { Link } from 'react-router-dom';

type IProps = {
  // name: string;
};

export default class Home extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        name: home
        <div>
          <Link to="/home">
            Home
        </Link>
          <br />
          <Link to="/hooks">
            Hooks
        </Link>
        </div>
      </>);
  }
}
