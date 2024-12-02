import {FileAttachment} from "../../_observablehq/stdlib.8048ec16.js";

export const targetAges = [13, 14, 15, 16, 17, 18, 19, 20, 21];
export const billProposals = {
    13: FileAttachment({"name":"../../data/bill-proposal/age_13.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_13.15e2b91b.csv","lastModified":1732977016597,"size":174688}, import.meta.url).csv({typed: false}),
    14: FileAttachment({"name":"../../data/bill-proposal/age_14.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_14.164b2c16.csv","lastModified":1732977016597,"size":107455}, import.meta.url).csv({typed: false}),
    15: FileAttachment({"name":"../../data/bill-proposal/age_15.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_15.a00ce05f.csv","lastModified":1732977016597,"size":364317}, import.meta.url).csv({typed: false}),
    16: FileAttachment({"name":"../../data/bill-proposal/age_16.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_16.334377ac.csv","lastModified":1732977016598,"size":951972}, import.meta.url).csv({typed: false}),
    17: FileAttachment({"name":"../../data/bill-proposal/age_17.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_17.4d149b32.csv","lastModified":1732977016600,"size":3163850}, import.meta.url).csv({typed: false}),
    18: FileAttachment({"name":"../../data/bill-proposal/age_18.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_18.4fe5fae4.csv","lastModified":1732977016604,"size":6399848}, import.meta.url).csv({typed: false}),
    19: FileAttachment({"name":"../../data/bill-proposal/age_19.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_19.f477a8b9.csv","lastModified":1732977016611,"size":8850625}, import.meta.url).csv({typed: false}),
    20: FileAttachment({"name":"../../data/bill-proposal/age_20.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_20.8bb599e6.csv","lastModified":1732977016618,"size":12221829}, import.meta.url).csv({typed: false}),
    21: FileAttachment({"name":"../../data/bill-proposal/age_21.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/age_21.583e0cc6.csv","lastModified":1732977016627,"size":13429281}, import.meta.url).csv({typed: false}),
};
export const billProposalMappings = {
    13: FileAttachment({"name":"../../data/bill-proposal/mappings_13.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_13.7d89d807.csv","lastModified":1732978953487,"size":55913}, import.meta.url).csv({typed: false}),
    14: FileAttachment({"name":"../../data/bill-proposal/mappings_14.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_14.966ab01b.csv","lastModified":1732978953487,"size":88645}, import.meta.url).csv({typed: false}),
    15: FileAttachment({"name":"../../data/bill-proposal/mappings_15.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_15.61267f06.csv","lastModified":1732978953488,"size":380260}, import.meta.url).csv({typed: false}),
    16: FileAttachment({"name":"../../data/bill-proposal/mappings_16.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_16.6f03b8e5.csv","lastModified":1732978953489,"size":1784800}, import.meta.url).csv({typed: false}),
    17: FileAttachment({"name":"../../data/bill-proposal/mappings_17.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_17.69319f8a.csv","lastModified":1732978953493,"size":5726681}, import.meta.url).csv({typed: false}),
    18: FileAttachment({"name":"../../data/bill-proposal/mappings_18.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_18.d0e66788.csv","lastModified":1732978953500,"size":11570552}, import.meta.url).csv({typed: false}),
    19: FileAttachment({"name":"../../data/bill-proposal/mappings_19.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_19.4b127708.csv","lastModified":1732978953510,"size":15525288}, import.meta.url).csv({typed: false}),
    20: FileAttachment({"name":"../../data/bill-proposal/mappings_20.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_20.3ed8528e.csv","lastModified":1732978953523,"size":20693069}, import.meta.url).csv({typed: false}),
    21: FileAttachment({"name":"../../data/bill-proposal/mappings_21.csv","mimeType":"text/csv","path":"../../_file/data/bill-proposal/mappings_21.26cfd0f6.csv","lastModified":1732978953538,"size":22845867}, import.meta.url).csv({typed: false}),
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