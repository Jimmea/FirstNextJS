import React from 'react';

const componentName = () => {
    return (
        <div>
            <Header/>
    <div className="container">
        <div className="row">
        <div className="col-md-12">
            <h1>Barclays Premier League</h1>
            <Link href="/about">
            Thêm mới
            </Link>
            <table className="table table-bordered">
            <thead>
                <tr>
                <th>Position</th>
                <th>Team</th>
                <th>P</th>
                <th>GL</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {this.props.data.standing.map((standing, i) => {
                const oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                return (
                    <tr key={i} className={oddOrNot}>
                    <td>{standing.position}</td>
                    <td><img className="pure-img logo" src={standing.crestURI} style={logoStyle}/></td>
                    <td>{standing.points}</td>
                    <td>{standing.goals}</td>
                    <td>{standing.wins}</td>
                    <td>{standing.draws}</td>
                    <td>{standing.losses}</td>
                    <td><Link href={`/details?id=${standing.position}`}>More...</Link></td>
                    </tr>
                );
            })}
            </tbody>
            </table>
        </div>
    </div>
    </div>
        </div>
    );
};

export default componentName;