// APIのレスポンスの型定義（画像に合わせて更新）
export interface AddressResponse {
  status: number;
  items: {
    address: string;
    components: [string, string, string]; // 都道府県, 市区町村, 町域
    pref: string;
    zipcode: string;
  }[];
}
