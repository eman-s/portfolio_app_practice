import React, { Component } from 'react';


export default class Portfolio extends Component {
  render() {
    let style = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }
    let subHeadings = {
      "color": "#fff",
    }
    let popularStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://2w6kxc22rrr9mabqt1mglgait6.wpengine.netdna-cdn.com/wp-content/uploads/2016/03/Kim-Jung-Un-horse.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }
    let accomplishments = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.wykop.pl/cdn/c3201142/comment_0aso6JYeE6sEv8eHayPdWRtcRxkjupbU.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }

    return (
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
          <div className="col-lg-8 map">
          <h2 className="headings" style={subHeadings}>
            Accomplishments
          </h2>
          </div>
        </section>
        <section className="row" style={popularStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <hr/>
            <p className="primary-text">
            중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다, 모든 국민의 재산권은 보장된다, 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.
            군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다, 모든 국민은 법 앞에 평등하다. 국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다. 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.
            </p>
            <p className="primary-text">

            예비비의 지출은 차기국회의 승인을 얻어야 한다. 다만, 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다. 균등한 기회가 보장되어야 한다. 3인은 대법원장이 지명하는 자를 임명한다, 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다.
            </p>
            <hr/>
          </article>
        </section>
        <section className='row' style={accomplishments}>
        <article className="col-lg-6 col-lg-offset-3">
          <hr/>
          <p className="primary-text">
          중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에 관한 규칙을 제정할 수 있으며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다, 모든 국민의 재산권은 보장된다, 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.
          군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다, 모든 국민은 법 앞에 평등하다. 국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다. 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.
          </p>
          <p className="primary-text">

          예비비의 지출은 차기국회의 승인을 얻어야 한다. 다만, 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다. 균등한 기회가 보장되어야 한다. 3인은 대법원장이 지명하는 자를 임명한다, 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다.
          </p>
          <hr/>
        </article>
        </section>
      </div>
    );
  }
}
