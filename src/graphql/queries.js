/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCondition = /* GraphQL */ `
  query GetCondition($id: ID!) {
    getCondition(id: $id) {
      conditionId
      name
      details
      diagnosisDate
      diagnosingDoctor
      hospitalCenter
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listConditions = /* GraphQL */ `
  query ListConditions(
    $filter: ModelConditionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConditions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      ssn
      firstName
      lastName
      hasPiercings
      bloodType
      gender
      sex
      birthDate
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      hasMedications {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      hasAllergies {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      hasSurgeries {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      hasProviders {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      hasFamily {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ssn
        firstName
        lastName
        hasPiercings
        bloodType
        gender
        sex
        birthDate
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        hasMedications {
          medicationId
          name
          type
          manufacturer
          dosage
          current
          dateOfPrescription
          id
          createdAt
          updatedAt
          owner
        }
        hasAllergies {
          allergyId
          name
          diagnosisDate
          id
          createdAt
          updatedAt
          owner
        }
        hasSurgeries {
          surgeryId
          name
          date
          id
          createdAt
          updatedAt
          owner
        }
        hasProviders {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        hasFamily {
          familyId
          firstName
          lastName
          birthDate
          id
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMedication = /* GraphQL */ `
  query GetMedication($id: ID!) {
    getMedication(id: $id) {
      medicationId
      name
      type
      manufacturer
      dosage
      current
      hasProvider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      dateOfPrescription
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMedications = /* GraphQL */ `
  query ListMedications(
    $filter: ModelMedicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        medicationId
        name
        type
        manufacturer
        dosage
        current
        hasProvider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        dateOfPrescription
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAllergy = /* GraphQL */ `
  query GetAllergy($id: ID!) {
    getAllergy(id: $id) {
      allergyId
      name
      diagnosisDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAllergies = /* GraphQL */ `
  query ListAllergies(
    $filter: ModelAllergyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllergies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        allergyId
        name
        diagnosisDate
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSurgery = /* GraphQL */ `
  query GetSurgery($id: ID!) {
    getSurgery(id: $id) {
      surgeryId
      name
      date
      provider {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSurgeries = /* GraphQL */ `
  query ListSurgeries(
    $filter: ModelSurgeryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurgeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        surgeryId
        name
        date
        provider {
          providerId
          name
          specialty
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      providerId
      name
      hospitalOffice {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      specialty
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        providerId
        name
        hospitalOffice {
          healthLocId
          name
          id
          createdAt
          updatedAt
          owner
        }
        specialty
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getHealthcareLoc = /* GraphQL */ `
  query GetHealthcareLoc($id: ID!) {
    getHealthcareLoc(id: $id) {
      healthLocId
      name
      address {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listHealthcareLocs = /* GraphQL */ `
  query ListHealthcareLocs(
    $filter: ModelHealthcareLocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHealthcareLocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        healthLocId
        name
        address {
          street
          city
          state
          zipcode
          id
          createdAt
          updatedAt
          owner
        }
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      street
      city
      state
      zipcode
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        street
        city
        state
        zipcode
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFamilyMember = /* GraphQL */ `
  query GetFamilyMember($id: ID!) {
    getFamilyMember(id: $id) {
      familyId
      hasConditions {
        conditionId
        name
        details
        diagnosisDate
        diagnosingDoctor
        hospitalCenter
        id
        createdAt
        updatedAt
        owner
      }
      firstName
      lastName
      birthDate
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFamilyMembers = /* GraphQL */ `
  query ListFamilyMembers(
    $filter: ModelFamilyMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilyMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        familyId
        hasConditions {
          conditionId
          name
          details
          diagnosisDate
          diagnosingDoctor
          hospitalCenter
          id
          createdAt
          updatedAt
          owner
        }
        firstName
        lastName
        birthDate
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
