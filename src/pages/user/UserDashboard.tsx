import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import UserHome from '@/components/user/UserHome'
import UserProfile from './UserProfile'
import Performance from './Performance'
import UserCoursePage from './UserCoursePage'
import HackathonPage from './HackathonPage'
import Mcq from './Mcq'
import ResumeAnalysis from './ResumeAnalysis'
import Settings from './Settings'
import DataAnalytics from './DataAnalytics'
import Resources from './EduResource'
import { Button } from '@/components/ui/button'
import Meet from './Meet'
import LabSmith from './lab-smith'

export default function Dashboard() {
  return (
    <div className='container relative max-w-screen-2xl py-8'>
      <main>
        <Tabs defaultValue='home'>
          <TabsList className='mb-6'>
            <TabsTrigger value='home'>Home</TabsTrigger>
            <TabsTrigger value='course'>Modules</TabsTrigger>
            <TabsTrigger value='performance'>Performance</TabsTrigger>
            <TabsTrigger value='hackathons'>Competition</TabsTrigger>
            <TabsTrigger value='mcq'>Test</TabsTrigger>
            <TabsTrigger value='infra'>Infrastructure Analysis</TabsTrigger>
            <TabsTrigger value='lab'>Virtual Lab</TabsTrigger>
            <TabsTrigger value='meet'>Virtual Meet</TabsTrigger>
            <TabsTrigger value='education'>Educational Resources</TabsTrigger>
            <TabsTrigger value='settings'>Settings</TabsTrigger>
            <TabsTrigger value='profile'>Profile</TabsTrigger>
          </TabsList>

          <TabsContent value='home'>
            <UserHome />
          </TabsContent>
          <TabsContent value='profile'>
            <UserProfile />
          </TabsContent>
          <TabsContent value='course'>
            <UserCoursePage />
          </TabsContent>
          <TabsContent value='mcq'>
            <Mcq />
          </TabsContent>
          <TabsContent value='performance'>
            <Performance />
          </TabsContent>
          <TabsContent value='hackathons'>
            <HackathonPage />
          </TabsContent>
          <TabsContent value='infra'>
            <DataAnalytics />
          </TabsContent>
          <TabsContent value='resume'>
            <ResumeAnalysis />
          </TabsContent>
          <TabsContent value='education'>
            <Resources />
          </TabsContent>
          <TabsContent value='settings'>
            <Settings />
          </TabsContent>
          <TabsContent value='meet'>
            <Meet/>
          </TabsContent>
          <TabsContent value='lab'>
            <LabSmith/>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
