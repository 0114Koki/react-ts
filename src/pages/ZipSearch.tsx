import React, { useState } from "react";

// APIのレスポンスの型定義（画像に合わせて更新）
export type AddressResponse = {
  status: number;
  items: {
    address: string;
    components: [string, string, string]; // 都道府県, 市区町村, 町域
    pref: string;
    zipcode: string;
  }[];
};

const ZipSearch: React.FC = () => {
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const fetchAddress = async () => {
    try {
      const res = await fetch(`https://zipcoda.net/api?zipcode=${zipcode}`);
      const data: AddressResponse = await res.json();

      console.log(data);

      if (data.items && data.items.length > 0) {
        const [pref, city, town] = data.items[0].components;
        setAddress(`${pref}${city}${town}`);
        setError("");
      } else {
        setAddress("");
        setError("住所が見つかりませんでした");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setAddress("");
      setError("API通信に失敗しました");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>郵便番号検索</h2>
      <input
        type="text"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        placeholder="例: 1660004"
      />
      <button onClick={fetchAddress}>検索</button>
      {address && <p>住所: {address}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ZipSearch;
