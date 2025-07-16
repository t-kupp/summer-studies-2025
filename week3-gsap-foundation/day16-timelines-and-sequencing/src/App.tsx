import Exercise16_TimeLineControls from "./components/Exercise16_TimeLineControls";
import Exercise17_TimelineLabels from "./components/Exercise17_TimelineLabels";
import Exercise18_OverlappingAnimations from "./components/Exercise18_OverlappingAnimations";
import Exercise19_NestedTimelines from "./components/Exercise19_NestedTimelines";
import Exercise20_TimelineCallbacks from "./components/Exercise20_TimelineCallbacks";
import Exercise21_DynamicTimeline from "./components/Exercise21_DynamicTimeline";
import Exercise22_TimelineScrubbing from "./components/Exercise22_TimelineScrubbing";

function App() {
  return (
    <div className="p-8">
      <Exercise16_TimeLineControls />
      <Exercise17_TimelineLabels />
      <Exercise18_OverlappingAnimations />
      <Exercise19_NestedTimelines />
      <Exercise20_TimelineCallbacks />
      <Exercise21_DynamicTimeline />
      <Exercise22_TimelineScrubbing />
    </div>
  );
}

export default App;
