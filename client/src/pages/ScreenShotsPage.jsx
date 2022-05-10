import { Card } from "@mui/material";
import { PageContainer } from "../components";

/**
 * @component ScreenShotsPage
 * Display the screenshots of the application
 */
export default function ScreenShotsPage() {
   return (
      <PageContainer>
         {
            [1, 2, 3, 4, 5, 6, 7].map((item) => (
               <Card key={item}>
                  <img src={`/screenshots/${item}.png`} alt="screenshot" />
               </Card>
            ))
         }
      </PageContainer>
   );
}