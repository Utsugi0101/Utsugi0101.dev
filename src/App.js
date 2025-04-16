// ProfilePage.jsx
import React from "react";

export default function ProfilePage() {
  const profile = {
    name: "高橋 空暉",
    affiliation: "筑波大学 知識情報・図書館学類",
    history: [
      "2023年4月 筑波大学入学",
      "2024年 技術系イベントにて登壇",
      "2025年 自作Webサービスを公開"
    ],
    works: [
      {
        title: "寿司勘定",
        description: "回転寿司の割り勘アプリ",
        url: "https://example.com/sushikanjo"
      },
      {
        title: "音符読み支援ツール",
        description: "楽譜の下にカタカナで音名を表示するツール",
        url: "https://example.com/musicreader"
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-lg text-gray-600">{profile.affiliation}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-2">経歴</h2>
        <ul className="list-disc list-inside space-y-1">
          {profile.history.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">創作物</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.works.map((work, idx) => (
            <a
              key={idx}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-xl p-4 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold">{work.title}</h3>
              <p className="text-gray-600 text-sm">{work.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
