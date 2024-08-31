import React, { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Select } from '@/components/ui/select'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const educationalResources = [
  {
    id: 1,
    title: 'Mathematics Textbook for Grade 5',
    type: 'Textbook',
    subject: 'Math',
    grade: 'Primary',
    availability: 'Available',
    description:
      'An engaging textbook covering fundamental concepts of mathematics for primary grade students.',
    image:
      'https://img.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 2,
    title: 'Interactive Science Digital Content',
    type: 'Digital Content',
    subject: 'Science',
    grade: 'Secondary',
    availability: 'Checked Out',
    description:
      'Interactive digital content covering key scientific principles for secondary school students.',
    image:
      'https://img.freepik.com/free-vector/colorful-science-education-background_23-2148486110.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 5,
    title: 'Biology eLearning Module',
    type: 'Digital Content',
    subject: 'Science',
    grade: 'Higher Secondary',
    availability: 'Available',
    description:
      'An eLearning module that provides comprehensive coverage of biology topics for higher secondary students.',
    image:
      'https://img.freepik.com/free-vector/flat-biotechnology-illustration_23-2148899110.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 3,
    title: 'History Teaching Aid for High School',
    type: 'Teaching Aid',
    subject: 'History',
    grade: 'Higher Secondary',
    availability: 'Available',
    description:
      'A comprehensive set of teaching aids to make history lessons more interactive and engaging.',
    image:
      'https://img.freepik.com/premium-vector/history-textbook-school-book-doodle-symbols_8071-53104.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 4,
    title: 'English Grammar Workbook',
    type: 'Textbook',
    subject: 'English',
    grade: 'Secondary',
    availability: 'Available',
    description:
      'A workbook designed to improve grammar and language skills in secondary grade students.',
    image:
      'https://img.freepik.com/free-vector/gradient-english-school-illustration_23-2149477712.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 6,
    title: 'Geography Teaching Kit',
    type: 'Teaching Aid',
    subject: 'Geography',
    grade: 'Secondary',
    availability: 'Checked Out',
    description:
      'A teaching kit that includes maps, charts, and interactive activities to make geography lessons engaging.',
    image:
      'https://img.freepik.com/premium-vector/geography-school-subject-people-research-cross-section-volcano-students-studying-atlas-lands-features-inhabitants-earth-cartography-navigation-geology-environment-research_458444-1797.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 7,
    title: 'Algebra Textbook for Grade 8',
    type: 'Textbook',
    subject: 'Math',
    grade: 'Secondary',
    availability: 'Available',
    description:
      'An in-depth algebra textbook for secondary school students that covers all essential concepts.',
    image:
      'https://img.freepik.com/free-vector/scientific-formulas-chalkboard_23-2148494010.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 8,
    title: 'World History Digital Resource',
    type: 'Digital Content',
    subject: 'History',
    grade: 'Higher Secondary',
    availability: 'Checked Out',
    description:
      'Digital resource material that explores world history through interactive content and videos.',
    image:
      'https://img.freepik.com/premium-vector/seamless-texture-with-antique-italy-landmarks-style-traveler-notes-sketches_464351-395.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 9,
    title: 'Physics Lab Equipment Set',
    type: 'Teaching Aid',
    subject: 'Science',
    grade: 'Higher Secondary',
    availability: 'Available',
    description:
      'A complete set of lab equipment for conducting physics experiments in higher secondary classes.',
    image:
      'https://img.freepik.com/premium-vector/physics-class-set-objects_178650-7933.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
  {
    id: 10,
    title: 'Elementary School Math Game',
    type: 'Digital Content',
    subject: 'Math',
    grade: 'Primary',
    availability: 'Available',
    description:
      'A fun and interactive game designed to help primary school students practice basic math skills.',
    image:
      'https://img.freepik.com/premium-vector/mathematics-textbook-school-chalkboard-background_8071-53392.jpg?ga=GA1.1.775211973.1722871722&semt=ais_hybrid',
  },
]

const filterOptions = {
  type: ['Textbook', 'Digital Content', 'Teaching Aid'],
  subject: ['Math', 'Science', 'History', 'English', 'Geography'],
  grade: ['Primary', 'Secondary', 'Higher Secondary'],
  availability: ['Available', 'Checked Out'],
}

// Card component for displaying educational resources
const ResourceCard = ({ resource }) => (
  <div className='mb-4 rounded-lg border p-4'>
    <img
      src={resource.image}
      alt={resource.title}
      className='h-40 w-full rounded-t-lg object-cover'
    />
    <h3 className='mt-4 text-xl font-bold hover:underline'>{resource.title}</h3>
    <p className='mt-1 text-sm'>{resource.description}</p>
  </div>
)

const Resources = () => {
  const [filterCounter, setFilterCounter] = useState(0)
  const [activeSort, setActiveSort] = useState('Most relevant')
  const [filteredResources, setFilteredResources] = useState(educationalResources) // Initialize with all resources
  const [filters, setFilters] = useState({
    type: [],
    subject: [],
    grade: [],
    availability: [],
  })

  // Function to handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters }
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter((item) => item !== value)
      } else {
        newFilters[filterType].push(value)
      }

      // Update filtered resources based on the selected filters
      const newFilteredResources = educationalResources.filter((resource) => {
        return (
          (newFilters.type.length === 0 || newFilters.type.includes(resource.type)) &&
          (newFilters.subject.length === 0 || newFilters.subject.includes(resource.subject)) &&
          (newFilters.grade.length === 0 || newFilters.grade.includes(resource.grade)) &&
          (newFilters.availability.length === 0 ||
            newFilters.availability.includes(resource.availability))
        )
      })

      setFilteredResources(newFilteredResources)
      return newFilters
    })

    setFilterCounter(filterCounter + 1)
  }

  const handleSortClick = (sortType) => {
    setActiveSort(sortType)
    // Implement sorting logic here
  }

  const renderFilters = (title, options, filterType) => (
    <div className='mt-10'>
      <h2>{title}</h2>
      {options.map((option) => (
        <div key={option} className='mt-3 flex items-center gap-5'>
          <Checkbox
            id={option}
            onClick={() => handleFilterChange(filterType, option)}
            checked={filters[filterType].includes(option)}
          />
          <Label htmlFor={option}>{option}</Label>
        </div>
      ))}
    </div>
  )

  const renderResourceList = () => (
    <div className='grid grid-cols-3 gap-4'>
      {filteredResources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  )

  return (
    <div className='flex'>
      {/* Filters Section */}
      <div className='w-1/4 border-r p-5'>
        {renderFilters('Type', filterOptions.type, 'type')}
        {renderFilters('Subject', filterOptions.subject, 'subject')}
        {renderFilters('Grade', filterOptions.grade, 'grade')}
      </div>

      {/* Resource List Section */}
      <div className='w-3/4 p-5'>
        <div className='mb-5 flex items-center justify-end gap-5'>
          <h1>Sort:</h1>
          {['Most relevant', 'Submission date', 'Recently Added', 'Price Amount'].map(
            (sortType) => (
              <Button
                key={sortType}
                variant={'link'}
                className={activeSort === sortType ? 'underline' : ''}
                onClick={() => handleSortClick(sortType)}
              >
                {sortType}
              </Button>
            ),
          )}
        </div>

        {/* Render Resource List */}
        {renderResourceList()}
      </div>
    </div>
  )
}

export default Resources
