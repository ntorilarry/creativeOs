export interface categoryResponse {
  result: {
    data: [
      {
        id: number;
        categoryName: string;
      }
    ];
  };
}

export interface templateResponse {
  result: {
    data: [
      {
        id: number;
        images: [
          {
            id: number;
            image: string;
          }
        ];
        createdBy: string
      }
    ];
  };
}
