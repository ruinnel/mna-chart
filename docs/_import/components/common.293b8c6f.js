import {FileAttachment} from "../../_observablehq/stdlib.2f4f503a.js";

export const targetAges = [13, 14, 15, 16, 17, 18, 19, 20, 21];
export const billProposals = {
    get(val) {
        const age = parseInt(val);
        switch (age) {
            case 13: return FileAttachment({"name":"../../data/bill-proposal/age_13.parquet","path":"../../_file/data/bill-proposal/age_13.93f71786.parquet","lastModified":1734678868395,"size":48873}, import.meta.url).parquet();
            case 14: return FileAttachment({"name":"../../data/bill-proposal/age_14.parquet","path":"../../_file/data/bill-proposal/age_14.df363d7d.parquet","lastModified":1734678868395,"size":39618}, import.meta.url).parquet();
            case 15: return FileAttachment({"name":"../../data/bill-proposal/age_15.parquet","path":"../../_file/data/bill-proposal/age_15.a37f81c1.parquet","lastModified":1734678868396,"size":84881}, import.meta.url).parquet();
            case 16: return FileAttachment({"name":"../../data/bill-proposal/age_16.parquet","path":"../../_file/data/bill-proposal/age_16.0adf9c7d.parquet","lastModified":1734678868397,"size":228035}, import.meta.url).parquet();
            case 17: return FileAttachment({"name":"../../data/bill-proposal/age_17.parquet","path":"../../_file/data/bill-proposal/age_17.5a8660d9.parquet","lastModified":1734678868400,"size":848852}, import.meta.url).parquet();
            case 18: return FileAttachment({"name":"../../data/bill-proposal/age_18.parquet","path":"../../_file/data/bill-proposal/age_18.2de6f5d4.parquet","lastModified":1734678868409,"size":1942399}, import.meta.url).parquet();
            case 19: return FileAttachment({"name":"../../data/bill-proposal/age_19.parquet","path":"../../_file/data/bill-proposal/age_19.b5d56d37.parquet","lastModified":1734678868420,"size":2742169}, import.meta.url).parquet();
            case 20: return FileAttachment({"name":"../../data/bill-proposal/age_20.parquet","path":"../../_file/data/bill-proposal/age_20.a04325a8.parquet","lastModified":1734678868435,"size":3702637}, import.meta.url).parquet();
            case 21: return FileAttachment({"name":"../../data/bill-proposal/age_21.parquet","path":"../../_file/data/bill-proposal/age_21.485d96b4.parquet","lastModified":1734678868452,"size":4105522}, import.meta.url).parquet();
            default: return null;
        }
    },
};
export const billProposalMappings = {
    get(val) {
        const age = parseInt(val);
        switch (age) {
            case 13: return FileAttachment({"name":"../../data/bill-proposal/mappings_13.parquet","path":"../../_file/data/bill-proposal/mappings_13.c9668506.parquet","lastModified":1734678868453,"size":13957}, import.meta.url).parquet();
            case 14: return FileAttachment({"name":"../../data/bill-proposal/mappings_14.parquet","path":"../../_file/data/bill-proposal/mappings_14.6bdccc0f.parquet","lastModified":1734678868454,"size":13676}, import.meta.url).parquet();
            case 15: return FileAttachment({"name":"../../data/bill-proposal/mappings_15.parquet","path":"../../_file/data/bill-proposal/mappings_15.e479cc04.parquet","lastModified":1734678868454,"size":38210}, import.meta.url).parquet();
            case 16: return FileAttachment({"name":"../../data/bill-proposal/mappings_16.parquet","path":"../../_file/data/bill-proposal/mappings_16.62ed1f74.parquet","lastModified":1734678868455,"size":164648}, import.meta.url).parquet();
            case 17: return FileAttachment({"name":"../../data/bill-proposal/mappings_17.parquet","path":"../../_file/data/bill-proposal/mappings_17.920eff88.parquet","lastModified":1734678868457,"size":506003}, import.meta.url).parquet();
            case 18: return FileAttachment({"name":"../../data/bill-proposal/mappings_18.parquet","path":"../../_file/data/bill-proposal/mappings_18.b80b343e.parquet","lastModified":1734678868461,"size":1033445}, import.meta.url).parquet();
            case 19: return FileAttachment({"name":"../../data/bill-proposal/mappings_19.parquet","path":"../../_file/data/bill-proposal/mappings_19.34aef741.parquet","lastModified":1734678868466,"size":1395808}, import.meta.url).parquet();
            case 20: return FileAttachment({"name":"../../data/bill-proposal/mappings_20.parquet","path":"../../_file/data/bill-proposal/mappings_20.f609d59e.parquet","lastModified":1734678868472,"size":1881500}, import.meta.url).parquet();
            case 21: return FileAttachment({"name":"../../data/bill-proposal/mappings_21.parquet","path":"../../_file/data/bill-proposal/mappings_21.1c5b9f4d.parquet","lastModified":1734678868481,"size":2129718}, import.meta.url).parquet();
            default: return null;
        }
    },
};

export const allStatus = [
    '발의수', 
    '원안가결', '수정가결', '철회', 
    // '부결', 
    '수정안반영폐기', '대안반영폐기', '폐기', '임기만료폐기',
    // '회기불계속폐기', '기타', // 데이터가 대부분 0 임.
  ];

export const allKind = ["대표발의", "공동발의", "전체"];

// category10
export const allStatusColors = {
    '발의수': "#1f77b4", 
    '원안가결': "#ff7f0e",
    '수정가결': "#2ca02c",
    '철회': "#d62728", 
    '수정안반영폐기': "#9467bd",
    '대안반영폐기': "#8c564b",
    '폐기': "#e377c2",
    '임기만료폐기': "#7f7f7f",
}

// obserable의 `wide` theme에서 markdown으로 생성되는 `ul`, `ol` tag의 길이가 600px로 고정되는 이슈 해결을 위한 코드
export function fixMaxWidth() {
    ['ul', 'ol'].forEach((tag) => {
      let timeoutID = null;
      const elements = document.getElementsByTagName(tag);
      if (elements.length > 0) {
          for (let i = 0; i < elements.length; i++) {
              elements[i].style.maxWidth = 'max-content';
          }
          clearTimeout(timeoutID);
      } else {
          clearTimeout(timeoutID);
          timeoutID = setTimeout(fixMaxWidth, 10);
      }
    })
}

export function parquetToJson(parquet, columns = []) {
    const fields = parquet.schema.fields;
    let rows;
    if (columns && columns.length > 0) {
        rows = parquet.select(columns).toArray();
    } else {
        rows = parquet.toArray();
    }
    return rows.map((row) => (row.toJSON()))
}