# 패션회사 차리기 (1)

### 대한민국 Top 5 패션회사인 HSL은 다음과 같은 프로세스를 통해 수익을 냅니다.

1. 상품 디자인(제한 수 3개)
   - [x] 디자인 비용은 인건비 15달러입니다.
   - [x] 인건비는 생산 비용의 시작 비용입니다.
2. 수요 조사
   - [x] 모든 사이즈는 프리사이즈입니다.
   - [x] 수요조사 비용은 제품당 1달러입니다.
3. 상품 생산
   - [x] 수요의 +10%를 생산합니다.
   - [x] 1000개 이상 생산 시 생산 비용에 + 100달러, 1000개 이하 생산시 + 120달러로 책정합니다.
4. 판매 비용 결정
   - [x] 무조건 생산 비용에 10%의 마진을 붙입니다.
5. 판매
   - [x] 인기가 많아서 80~100%사이의 비율로 판매됩니다.(난수 생성 X, 직접 지정)
6. 최종 수익금 책정
   - [x] 판매 후 남은 것은 재고라서 수익에서 생산비용을 제외해야 합니다.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
