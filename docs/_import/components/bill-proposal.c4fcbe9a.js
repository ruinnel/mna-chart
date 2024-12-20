import * as Plot from "../../_npm/@observablehq/plot@0.6.16/e828d8c8.js";
import * as Inputs from "../../_observablehq/stdlib/inputs.76888eff.js";
import _ from "../../_npm/lodash@4.17.21/cbfa4f05.js";
import {allStatus, allKind, allStatusColors} from "./common.293b8c6f.js";

export function billProposalMemberChart(records, kind, status, {width, height} = {}) {
  const selectedStatus = `${status}(${kind})`
  const data = records.map((row) => ({
    "이름": `${row["국회의원명"]}(${row["정당명"]})`,
    "ID": row["국회의원코드"],
    "발의건수": row[selectedStatus],
    "상태": selectedStatus,
  }));
  const color = allStatusColors[status];
  const tip = {fontSize: 20, lineHeight: 2};
  return Plot.plot({
    width: width,
    height: data.length * 35,
    marginLeft: 200,
    y: {label: null},
    x: {label: null, grid: true, axis: "both"},
    color: {type: "diverging", scheme: "RdBu"},
    style: {fontSize: "20px", fontWeight: "bold"},
    marks: [
      Plot.barX(data, {x: "발의건수", y: "이름", fill: color, sort: {y: "x", reverse: true}, tip}),
      Plot.ruleY([0]),
    ]
  });
}

export function billProposalMemberTable(records, kind, status, {width} = {}) {
  const selectedStatus = `${status}(${kind})`;
  return Inputs.table(records, {maxWidth: width, columns: [
    "대수", "국회의원명", "국회의원한자명", "정당명", "선거구명",
     ...allStatus.map((s) => `${s}(${kind})`),
    ],
    sort: selectedStatus, reverse: true,
  })
}

export function getBiggestRecord(records, kind, status) {
  const selectedStatus = `${status}(${kind})`;
  const record = _.maxBy(records, (record) => (record[selectedStatus]));
  const name = record["국회의원명"];
  const party = record["정당명"];
  const count = parseInt(record[selectedStatus]);
  return {name, party, count};
}

export function getPartyRecord(records) {
  const grouped = _.groupBy(records, (row) => row["정당명"])
  const data = _.map(grouped, (records, party) => {
    return records.reduce((sum, row) => {
      allStatus.forEach((status) => { 
        const selectedStatus = `${status}(대표발의)`;
        sum[selectedStatus] = (sum[selectedStatus] || 0) + (row[selectedStatus] || 0)
        sum["대수"] = row["대수"]
      });
      return sum;
    }, {"정당명": party});
  })
  return _.sortBy(data, "정당명");
}

export function billProposalPartyChart(records, {width, height} = {}) {
  const tip = {fontSize: 20, lineHeight: 2};
  const lineMarks = [];
  const channels = {};
  allStatus.forEach((status) => {
    const selectedStatus = `${status}(대표발의)`;
    channels[status] = selectedStatus;
    if (status != "발의수") {
      lineMarks.push(
        Plot.lineY(records, {
          y: selectedStatus, x: "정당명", 
          marker: true, stroke: allStatusColors[status], strokeWidth: 3,
        })
      );
    }
  });
  return Plot.plot({
    width: width,
    height: 800,
    marginLeft: 100,
    y: {label: null},
    x: {label: null, grid: true},
    color: {type: "categorical", scheme: "Tableau10"},
    style: {fontSize: "20px", fontWeight: "medium"},
    marks: [
      Plot.barY(records, {
        y: "발의수(대표발의)", x: "정당명",
        fill: "정당명", tip,
        channels,
      }),
      ...lineMarks,
    ]
  });
}

export function billProposalPartyTable(records, kind, status, {width} = {}) {
  const selectedStatus = `${status}(${kind})`;
  return Inputs.table(records, {maxWidth: width, columns: [
    "대수", "정당명",
     ...allStatus.map((s) => `${s}(${kind})`),
    ],
    sort: selectedStatus, reverse: true,
  })
}

