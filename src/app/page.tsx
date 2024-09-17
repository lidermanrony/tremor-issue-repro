import Image from "next/image";
import { Card } from "@tremor/react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Card className="w-40 h-30 m-6 shadow-none bg-white">
        Why is there a shadow around me?
      </Card>
    </div>
  );
}
