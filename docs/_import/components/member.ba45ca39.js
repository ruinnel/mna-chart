import _ from "../../_npm/lodash@4.17.21/cbfa4f05.js";
import * as Plot from "../../_npm/@observablehq/plot@0.6.16/e828d8c8.js";
import * as Inputs from "../../_observablehq/stdlib/inputs.9d076414.js";
import {targetAges, allStatusColors} from "./common.7e2f4611.js";

export function makeCoworkerRank(allMembers, billProposals, mappings, billIds, age, ignoreCode) {
  const proposals = _.filter(mappings, (m) => (_.includes(billIds, m["의안ID"]) && m["국회의원코드"] != ignoreCode));
  const countByCode = _.countBy(proposals, '국회의원코드');
  const rank = _.map(countByCode, (v, k) => {
    const member = _.find(allMembers, (member) => (`${member["국회의원코드"]}` === k)) || {};
    const name = member["국회의원명"];
    const winAges = member["당선대수"] || "";
    const idx = _.split(winAges, ",")
        .map((winAge) => winAge.replaceAll(/[^0-9]/g, ""))
        .map((winAge) => _.toInteger(winAge))
        .findIndex((winAge) => (winAge == age));

    const party = _.split(member["정당명"], "/")[idx] || "";
    return {
        code: k, count: v,
        name, party,
    };
  });
  return rank;
}


export function coworkerRankMemberChart(rank, {width, height} = {}) {
  const data = rank.map(({code, name, count, party}) => ({
    code, party,
    "발의건수": count,
    "이름": `${name}(${party})` 
  }));
  const color = allStatusColors["발의수"];
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

export function coworkerRankPartyChart(rank, {width, height} = {}) {
  const counts = _.countBy(rank, "party");
  const data = _.map(counts, (v, k) => ({
    "이름": k, "발의건수": v
  }));
  const tip = {fontSize: 20, lineHeight: 2};
  const channels = {};
  return Plot.plot({
    width: width,
    height: 800,
    marginLeft: 100,
    y: {label: null},
    x: {label: null, grid: true},
    color: {type: "categorical", scheme: "Tableau10"},
    style: {fontSize: "20px", fontWeight: "medium"},
    marks: [
      Plot.barY(data, {
        y: "발의건수", x: "이름",
        fill: "이름", tip,
        channels,
      }),
    ]
  });
}