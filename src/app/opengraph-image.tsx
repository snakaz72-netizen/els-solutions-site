import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const products = ["RECO PALLET", "CONTINEWM", "CM Fiber Cassette"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 8,
            height: "100%",
            backgroundColor: "#16a34a",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "80px 80px 60px 100px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 700,
              color: "#111827",
            }}
          >
            ELSソリューションズ株式会社
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#6b7280",
              marginTop: 24,
            }}
          >
            ESG・省エネ製品で企業のサステナビリティを支援
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 56,
            }}
          >
            {products.map((product) => (
              <div
                key={product}
                style={{
                  display: "flex",
                  backgroundColor: "#f0fdf4",
                  color: "#16a34a",
                  fontSize: 24,
                  fontWeight: 600,
                  padding: "12px 24px",
                  borderRadius: 999,
                }}
              >
                {product}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 40px 32px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#9ca3af",
            }}
          >
            els-solutions.co.jp
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
