"use client";

import DefaultLayout from "@/layouts/default";
import { useState, useMemo } from "react";
import { Progress } from "@nextui-org/progress";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

const entries = [
  {
    title: "Check tire pressure",
    description:
      "ensure each tire's pressure ranges between 90 PSI and 100 PSI using the tire inflater with gauge located [???]",
  },
  {
    title: "Check water tank",
    description: "lotta watta",
  },
  {
    title: "Check fuel tank",
    description: "vroom",
  },
];

export default function ChecklistPage() {
  const [cards, setCards] = useState(
    entries.map((data) => ({
      ...data,
      expanded: false,
      checked: false,
    }))
  );

  const handleToggleExpand = (index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, expanded: !card.expanded } : card
      )
    );
  };

  const handleToggleCheck = (index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, checked: !card.checked } : card
      )
    );
  };

  const checkedPercentage = useMemo(() => {
    const checkedCards = cards.filter((card) => card.checked).length;
    return (checkedCards / cards.length) * 100;
  }, [cards]);

  return (
    <DefaultLayout>
      <Progress className="w-3/4 py-4" value={checkedPercentage} />
      <ScrollShadow className="w-[90%] flex-grow gap-1 bg-gradient-to-b from-slate-400 to-slate-300 rounded-large">
        <div className="grid grid-cols-1 p-2 gap-1 max-h-1">
          {cards.map((card, index) => (
            <Card key={index}>
              <CardHeader
                onClick={() => handleToggleExpand(index)}
                className="cursor-pointer flex justify-between items-center bg-gray-100 duration-300 hover:bg-gray-200"
              >
                <span>{card.title}</span>
                <Checkbox
                  isSelected={card.checked}
                  onChange={() => handleToggleCheck(index)}
                />
              </CardHeader>
              {card.expanded && <CardBody>{card.description}</CardBody>}
            </Card>
          ))}
        </div>
      </ScrollShadow>
      <section className="w-72 grid grid-cols-2 gap-4 py-4">
        <Button isDisabled={checkedPercentage !== 100}>Submit</Button>
        <Button>Print</Button>
      </section>
    </DefaultLayout>
  );
}
