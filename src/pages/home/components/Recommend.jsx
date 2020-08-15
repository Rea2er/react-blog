import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { RecommendWrapper, RecommandItem } from "../style";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map((item) => {
          return (
            <RecommandItem
              imgUrl={item.get("imgUrl")}
              key={item.get("id")}
            ></RecommandItem>
          );
        })}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});

export default connect(mapStateToProps)(Recommend);
