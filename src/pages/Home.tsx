import { CalendarWrapper, type CalendarEvent } from "@company/commons/calendar";
import { ChartWrapper, type ChartDataItem, type ChartSeriesConfig } from "@company/commons/chart";
import { TimelineWrapper, type TimelineGroup, type TimelineItem } from "@company/commons/timeline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from "@/components/ui";
import dayjs from "dayjs";

import "react-calendar-timeline/dist/style.css";

const chartData: ChartDataItem[] = [
  { name: "월", 예약: 120, 탑승: 98 },
  { name: "화", 예약: 220, 탑승: 180 },
  { name: "수", 예약: 160, 탑승: 140 },
  { name: "목", 예약: 280, 탑승: 240 },
  { name: "금", 예약: 300, 탑승: 260 },
  { name: "토", 예약: 180, 탑승: 150 },
  { name: "일", 예약: 140, 탑승: 110 },
];

const chartSeries: ChartSeriesConfig[] = [
  { dataKey: "예약", name: "예약 수", color: "#8884d8" },
  { dataKey: "탑승", name: "탑승 수", color: "#82ca9d" },
];

const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "운항 브리핑",
    start: dayjs().format("YYYY-MM-DD"),
    color: "#4c6ef5",
  },
  {
    id: "2",
    title: "정비 점검",
    start: dayjs().add(2, "day").format("YYYY-MM-DD"),
    color: "#e8590c",
  },
  {
    id: "3",
    title: "승무원 교육",
    start: dayjs().add(5, "day").format("YYYY-MM-DD"),
    end: dayjs().add(6, "day").format("YYYY-MM-DD"),
    color: "#2f9e44",
  },
];

const timelineGroups: TimelineGroup[] = [
  { id: 1, title: "운항" },
  { id: 2, title: "정비" },
  { id: 3, title: "승무" },
];

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    group: 1,
    title: "노선 최종 점검",
    start_time: dayjs().startOf("day").add(1, "hour").valueOf(),
    end_time: dayjs().startOf("day").add(4, "hour").valueOf(),
  },
  {
    id: 2,
    group: 2,
    title: "엔진 체크",
    start_time: dayjs().startOf("day").add(2, "hour").valueOf(),
    end_time: dayjs().startOf("day").add(5, "hour").valueOf(),
  },
  {
    id: 3,
    group: 3,
    title: "승무 브리핑",
    start_time: dayjs().startOf("day").add(3, "hour").valueOf(),
    end_time: dayjs().startOf("day").add(6, "hour").valueOf(),
  },
];

export const HomePage = () => {
  return (
    <div className="app-shell">
      <header className="area area-header">
        <p>Header 영역 (텍스트만)</p>
      </header>

      <aside className="area area-left">
        <p>Sidebar 영역 (텍스트만)</p>
      </aside>

      <main className="area area-main">
        <Card>
          <CardHeader>
            <CardTitle>Main 영역</CardTitle>
            <CardDescription>test-package 컴포넌트 배치</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent>
            <p className="ui-muted">차트</p>
            <ChartWrapper type="line" data={chartData} series={chartSeries} height={280} />
            <Separator />
            <p className="ui-muted">캘린더</p>
            <CalendarWrapper events={calendarEvents} height={320} />
            <Separator />
            <p className="ui-muted">타임라인</p>
            <TimelineWrapper groups={timelineGroups} items={timelineItems} height={260} />
          </CardContent>
        </Card>
      </main>

      <footer className="area area-footer">
        <p>Footer 영역 (텍스트만)</p>
      </footer>
    </div>
  );
};
