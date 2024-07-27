import mongoose from "mongoose";
import Beneficiary from "../models/Beneficiary";
import Scheme from "../models/Scheme";


async function getEligibleBeneficiaries(schemeId) {
    try {
        // Find the scheme by ID
        const scheme = await Scheme.findById(schemeId);

        if (!scheme) {
            throw new Error('Scheme not found');
        }

        // Build the query based on the scheme's criteria
        const query = {};

        if (scheme.criteria.age_range) {
            if (scheme.criteria.age_range.min !== undefined) {
                query.age = { $gte: scheme.criteria.age_range.min };
            }
            if (scheme.criteria.age_range.max !== undefined) {
                query.age = { ...query.age, $lte: scheme.criteria.age_range.max };
            }
        }

        if (scheme.criteria.gender) {
            query.gender = { $in: scheme.criteria.gender };
        }

        if (scheme.criteria.income !== undefined) {
            query.income = { $lte: scheme.criteria.income };
        }

        if (scheme.criteria.region) {
            query.region = { $in: scheme.criteria.region };
        }

        if (scheme.criteria.category) {
            query.category = { $in: scheme.criteria.category };
        }

        if (scheme.criteria.marital_status) {
            query.marital_status = scheme.criteria.marital_status;
        }

        // Find all beneficiaries that match the criteria
        const beneficiaries = await Beneficiary.find(query);

        return beneficiaries;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Example usage
getEligibleBeneficiaries('66a552bb2effc3f338f6546a')
    .then(beneficiaries => {
        console.log('Eligible Beneficiaries:', beneficiaries);
    })
    .catch(error => {
        console.error('Error fetching eligible beneficiaries:', error);
    });

