"use client";
import { useTranslation } from "react-i18next";
import { Settings, History, BookText } from "lucide-react";
import { Button } from "@/components/Internal/Button";
import { useGlobalStore } from "@/store/global";

function Header() {
  const { t } = useTranslation();
  const { setOpenSetting, setOpenHistory, setOpenKnowledge } = useGlobalStore();

  return (
    <>
      <header className="relative flex justify-center items-center my-6 max-sm:my-4 print:hidden">
        <div className="absolute left-0">
          {/* Placeholder for left-aligned buttons if needed */}
        </div>
        <h1 className="text-center text-2xl font-bold text-dhl-red">
          {t("title")}
        </h1>
        <div className="absolute right-0 flex">
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            title={t("history.title")}
            onClick={() => setOpenHistory(true)}
          >
            <History className="h-5 w-5" />
          </Button>
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            title={t("knowledge.title")}
            onClick={() => setOpenKnowledge(true)}
          >
            <BookText />
          </Button>
          <Button
            className="h-8 w-8"
            title={t("setting.title")}
            variant="ghost"
            size="icon"
            onClick={() => setOpenSetting(true)}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
